// Copyright (c) 2026, The Salvium Project
#pragma once
#include <algorithm>
#include <cstdint>
#include <ctime>
#include <limits>
#include <list>
#include <map>
#include <string>

namespace nodetool
{
  // Automatic penalties only. Operator bans remain in a separate container.
  // The caller serializes access with the node's blocked-hosts lock.
  class peer_penalties
  {
    struct entry
    {
      std::uint64_t score = 0;
      time_t expires = 0;
      time_t banned_until = 0;
      std::list<std::string>::iterator position;
    };
    const std::size_t capacity;
    std::list<std::string> recent;
    std::map<std::string, entry> entries;

    entry& touch(const std::string& host, time_t now)
    {
      auto found = entries.find(host);
      if (found != entries.end())
      {
        if (found->second.expires <= now)
        {
          found->second.score = 0;
          found->second.banned_until = 0;
        }
        recent.splice(recent.end(), recent, found->second.position);
        return found->second;
      }
      while (entries.size() >= capacity)
      {
        entries.erase(recent.front());
        recent.pop_front();
      }
      recent.push_back(host);
      try
      {
        entry value;
        value.position = std::prev(recent.end());
        return entries.emplace(host, value).first->second;
      }
      catch (...) { recent.pop_back(); throw; }
    }

    static time_t deadline(time_t now, time_t duration)
    {
      if (duration <= 0) return now;
      return now > std::numeric_limits<time_t>::max() - duration
        ? std::numeric_limits<time_t>::max() : now + duration;
    }

  public:
    static constexpr std::size_t default_capacity = 4096;
    static constexpr time_t score_lifetime = 3600;
    explicit peer_penalties(std::size_t maximum = default_capacity)
      : capacity(std::max<std::size_t>(1, maximum)) {}

    peer_penalties(const peer_penalties&) = delete;
    peer_penalties& operator=(const peer_penalties&) = delete;

    bool add_failure(const std::string& host, std::uint64_t score,
      std::uint64_t threshold, time_t now)
    {
      auto& value = touch(host, now);
      const bool exceeded = value.score > threshold || score > threshold - value.score;
      value.score = exceeded ? threshold / 2 : value.score + score;
      value.expires = std::max(value.banned_until, deadline(now, score_lifetime));
      return exceeded;
    }

    void ban(const std::string& host, time_t duration, bool add_only, time_t now)
    {
      auto& value = touch(host, now);
      const time_t until = deadline(now, duration);
      value.banned_until = add_only ? std::max(value.banned_until, until) : until;
      value.expires = std::max(value.banned_until, deadline(now, score_lifetime));
    }

    bool blocked(const std::string& host, time_t now, time_t* remaining = nullptr) const
    {
      const auto found = entries.find(host);
      if (found == entries.end() || found->second.banned_until <= now) return false;
      if (remaining) *remaining = found->second.banned_until - now;
      return true;
    }

    bool erase(const std::string& host)
    {
      const auto found = entries.find(host);
      if (found == entries.end()) return false;
      recent.erase(found->second.position);
      entries.erase(found);
      return true;
    }

    void prune(time_t now)
    {
      for (auto it = entries.begin(); it != entries.end(); )
        if (it->second.expires <= now)
        {
          recent.erase(it->second.position);
          it = entries.erase(it);
        }
        else ++it;
    }

    std::map<std::string, time_t> bans(time_t now) const
    {
      std::map<std::string, time_t> result;
      for (const auto& item : entries)
        if (item.second.banned_until > now) result.emplace(item.first, item.second.banned_until);
      return result;
    }
    std::size_t size() const noexcept { return entries.size(); }
  };
}
