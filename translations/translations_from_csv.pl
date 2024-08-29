#!/usr/bin/perl -w -CS

use 5.010;
use strict;
use utf8;
use warnings;

use HTML::Entities;
use XML::LibXML;

use open qw( :std :encoding(UTF-8) );

#Name of the CSV File
my $csvfile = $ARGV[0];
my $lang;
if ($csvfile =~ /salvium_([a-z]{2}).csv/) {
    # got a match
    $lang = $1;
} else {
    die "input language code '$lang' is invalid";
}

# Open the correct input file
open(CSV, $csvfile) or die "Failed to open $csvfile: $!\n";

# Open the correct output file
my $xmlfile = "salvium_$lang.ts";
open(TS, '>', $xmlfile) or die "Failed to open $xmlfile: $!\n";

# Print the preamble
print TS "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!DOCTYPE TS>\n<TS version=\"2.1\" language=\"$lang\">\n";

# Print the records
my $context_name = "";
my $first_context = 1;
while (my $csv_line = <CSV>) {
    # Split the current line based on "===" delimiter
    my @fields = split("===", $csv_line);
    if ($fields[0] ne $context_name) {
        $context_name = $fields[0];
        if ($first_context) {
            $first_context = 0;
        } else {
            print TS "</context>\n";
        }
        print TS "<context>\n    <name>$context_name</name>\n";
    }

    print TS "    <message>\n";

    # Split the location entries
    my @locations = split(/\^/, $fields[3]);
    foreach (@locations) {
        if ($_ ne "") {
            # Split into filename + line
            my($filename, $line) = split(":", $_, 2);
            $line =~ s/\\n/\n/g;
            $line =~ s/\r\n/\n/g;
            $line =~ s/\r//g;
            chomp($line);
            print TS "        <location filename=\"$filename\" line=\"$line\"/>\n";
        }
    }

    # Output source + translation
    my $source = $fields[1];
    $source =~ s/\\n/\n/g;
    $source =~ s/\r\n/\n/g;
    $source =~ s/\r//g;
    my $translation = $fields[2];
    $translation =~ s/\\n/\n/g;
    $translation =~ s/\r\n/\n/g;
    $translation =~ s/\r//g;
    print TS "        <source>" . $source . "</source>\n";
    if (length($translation)) {
        print TS "        <translation>" . $translation . "</translation>\n";
    } else {
        print TS "        <translation type=\"unfinished\">" . $translation . "</translation>\n";
    }
    print TS "    </message>\n";
}

# Print the postamble
print TS "</context>\n";
print TS "</TS>\n";

# Close the files
close($xmlfile);
close($csvfile);
