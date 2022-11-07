=begin comment

Estuary API

This is the API for the Estuary application.

OpenAPI spec version: 0.0.0

Generated by: https://github.com/swagger-api/swagger-codegen.git

=end comment

=cut

#
# NOTE: This class is auto generated by Swagger Codegen
# Please update the test cases below to test the API endpoints.
# Ref: https://github.com/swagger-api/swagger-codegen
#
use Test::More tests => 1; #TODO update number of test cases
use Test::Exception;

use lib 'lib';
use strict;
use warnings;

use_ok('WWW::SwaggerClient::PinningApi');

my $api = WWW::SwaggerClient::PinningApi->new();
isa_ok($api, 'WWW::SwaggerClient::PinningApi');

#
# pinning_pins_get test
#
{
    my $result = $api->pinning_pins_get();
}

#
# pinning_pins_pinid_delete test
#
{
    my $pinid = undef; # replace NULL with a proper value
    my $result = $api->pinning_pins_pinid_delete(pinid => $pinid);
}

#
# pinning_pins_pinid_get test
#
{
    my $pinid = undef; # replace NULL with a proper value
    my $result = $api->pinning_pins_pinid_get(pinid => $pinid);
}

#
# pinning_pins_pinid_post test
#
{
    my $pinid = undef; # replace NULL with a proper value
    my $result = $api->pinning_pins_pinid_post(pinid => $pinid);
}

#
# pinning_pins_post test
#
{
    my $pin = undef; # replace NULL with a proper value
    my $result = $api->pinning_pins_post(pin => $pin);
}


1;
