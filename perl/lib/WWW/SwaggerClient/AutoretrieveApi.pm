=begin comment

Estuary API

This is the API for the Estuary application.

OpenAPI spec version: 0.0.0

Generated by: https://github.com/swagger-api/swagger-codegen.git

=end comment

=cut

#
# NOTE: This class is auto generated by the swagger code generator program. 
# Do not edit the class manually.
# Ref: https://github.com/swagger-api/swagger-codegen
#
package WWW::SwaggerClient::AutoretrieveApi;

require 5.6.0;
use strict;
use warnings;
use utf8; 
use Exporter;
use Carp qw( croak );
use Log::Any qw($log);

use WWW::SwaggerClient::ApiClient;

use base "Class::Data::Inheritable";

__PACKAGE__->mk_classdata('method_documentation' => {});

sub new {
    my $class = shift;
    my $api_client;

    if ($_[0] && ref $_[0] && ref $_[0] eq 'WWW::SwaggerClient::ApiClient' ) {
        $api_client = $_[0];
    } else {
        $api_client = WWW::SwaggerClient::ApiClient->new(@_);
    }

    bless { api_client => $api_client }, $class;

}


#
# admin_autoretrieve_init_post
#
# Register autoretrieve server
# 
# @param string $addresses Autoretrieve&#39;s comma-separated list of addresses (required)
# @param string $pub_key Autoretrieve&#39;s public key (required)
{
    my $params = {
    'addresses' => {
        data_type => 'string',
        description => 'Autoretrieve&#39;s comma-separated list of addresses',
        required => '1',
    },
    'pub_key' => {
        data_type => 'string',
        description => 'Autoretrieve&#39;s public key',
        required => '1',
    },
    };
    __PACKAGE__->method_documentation->{ 'admin_autoretrieve_init_post' } = { 
    	summary => 'Register autoretrieve server',
        params => $params,
        returns => 'string',
        };
}
# @return string
#
sub admin_autoretrieve_init_post {
    my ($self, %args) = @_;

    # verify the required parameter 'addresses' is set
    unless (exists $args{'addresses'}) {
      croak("Missing the required parameter 'addresses' when calling admin_autoretrieve_init_post");
    }

    # verify the required parameter 'pub_key' is set
    unless (exists $args{'pub_key'}) {
      croak("Missing the required parameter 'pub_key' when calling admin_autoretrieve_init_post");
    }

    # parse inputs
    my $_resource_path = '/admin/autoretrieve/init';

    my $_method = 'POST';
    my $query_params = {};
    my $header_params = {};
    my $form_params = {};

    # 'Accept' and 'Content-Type' header
    my $_header_accept = $self->{api_client}->select_header_accept('application/json');
    if ($_header_accept) {
        $header_params->{'Accept'} = $_header_accept;
    }
    $header_params->{'Content-Type'} = $self->{api_client}->select_header_content_type();

    # form params
    if ( exists $args{'addresses'} ) {
                $form_params->{'addresses'} = $self->{api_client}->to_form_value($args{'addresses'});
    }
    
    # form params
    if ( exists $args{'pub_key'} ) {
                $form_params->{'pubKey'} = $self->{api_client}->to_form_value($args{'pub_key'});
    }
    
    my $_body_data;
    # authentication setting, if any
    my $auth_settings = [qw(bearerAuth )];

    # make the API Call
    my $response = $self->{api_client}->call_api($_resource_path, $_method,
                                           $query_params, $form_params,
                                           $header_params, $_body_data, $auth_settings);
    if (!$response) {
        return;
    }
    my $_response_object = $self->{api_client}->deserialize('string', $response);
    return $_response_object;
}

#
# admin_autoretrieve_list_get
#
# List autoretrieve servers
# 
{
    my $params = {
    };
    __PACKAGE__->method_documentation->{ 'admin_autoretrieve_list_get' } = { 
    	summary => 'List autoretrieve servers',
        params => $params,
        returns => 'string',
        };
}
# @return string
#
sub admin_autoretrieve_list_get {
    my ($self, %args) = @_;

    # parse inputs
    my $_resource_path = '/admin/autoretrieve/list';

    my $_method = 'GET';
    my $query_params = {};
    my $header_params = {};
    my $form_params = {};

    # 'Accept' and 'Content-Type' header
    my $_header_accept = $self->{api_client}->select_header_accept('application/json');
    if ($_header_accept) {
        $header_params->{'Accept'} = $_header_accept;
    }
    $header_params->{'Content-Type'} = $self->{api_client}->select_header_content_type();

    my $_body_data;
    # authentication setting, if any
    my $auth_settings = [qw(bearerAuth )];

    # make the API Call
    my $response = $self->{api_client}->call_api($_resource_path, $_method,
                                           $query_params, $form_params,
                                           $header_params, $_body_data, $auth_settings);
    if (!$response) {
        return;
    }
    my $_response_object = $self->{api_client}->deserialize('string', $response);
    return $_response_object;
}

#
# autoretrieve_heartbeat_post
#
# Marks autoretrieve server as up
# 
# @param string $token Autoretrieve&#39;s auth token (required)
{
    my $params = {
    'token' => {
        data_type => 'string',
        description => 'Autoretrieve&#39;s auth token',
        required => '1',
    },
    };
    __PACKAGE__->method_documentation->{ 'autoretrieve_heartbeat_post' } = { 
    	summary => 'Marks autoretrieve server as up',
        params => $params,
        returns => 'string',
        };
}
# @return string
#
sub autoretrieve_heartbeat_post {
    my ($self, %args) = @_;

    # verify the required parameter 'token' is set
    unless (exists $args{'token'}) {
      croak("Missing the required parameter 'token' when calling autoretrieve_heartbeat_post");
    }

    # parse inputs
    my $_resource_path = '/autoretrieve/heartbeat';

    my $_method = 'POST';
    my $query_params = {};
    my $header_params = {};
    my $form_params = {};

    # 'Accept' and 'Content-Type' header
    my $_header_accept = $self->{api_client}->select_header_accept('application/json');
    if ($_header_accept) {
        $header_params->{'Accept'} = $_header_accept;
    }
    $header_params->{'Content-Type'} = $self->{api_client}->select_header_content_type();

    # header params
    if ( exists $args{'token'}) {
        $header_params->{'token'} = $self->{api_client}->to_header_value($args{'token'});
    }

    my $_body_data;
    # authentication setting, if any
    my $auth_settings = [qw(bearerAuth )];

    # make the API Call
    my $response = $self->{api_client}->call_api($_resource_path, $_method,
                                           $query_params, $form_params,
                                           $header_params, $_body_data, $auth_settings);
    if (!$response) {
        return;
    }
    my $_response_object = $self->{api_client}->deserialize('string', $response);
    return $_response_object;
}

1;
