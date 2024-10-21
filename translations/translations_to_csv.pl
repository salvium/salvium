#!/usr/bin/perl -w -CS

use 5.010;
use strict;
use utf8;
use warnings;

use HTML::Entities;
use XML::LibXML;

use open qw( :std :encoding(UTF-8) );

#Name of the XML File
my $xmlfile = "salvium.ts";
my $lang = $ARGV[0];
if (length($lang) != 2) {
    die "input language code '$lang' is invalid";
}
my $csvfile = "salvium_$lang.csv";
open(CSV, '>', $csvfile);

#Collect the XML and set nodes
my $dom = XML::LibXML->load_xml(location=>$xmlfile);
foreach my $context ($dom->findnodes('/TS/context')) {
    foreach my $message ($context->findnodes('./message')) {
        my $source = $message->findvalue('./source');
        $source =~ s/\n/\\n/g;
        print CSV $context->findvalue('./name') . "===";
        print CSV encode_entities($source,'<>&"') . "======";
        my @locations = ();
        foreach my $location ($message->findnodes('./location')) {
            my $temp = $location->getAttribute('filename') . ":" . $location->getAttribute('line');
            push(@locations, $temp);
        }
        print CSV join("^", @locations) . "\n";
    }
}

close($csvfile);
