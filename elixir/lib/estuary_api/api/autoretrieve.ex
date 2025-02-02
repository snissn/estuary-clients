# NOTE: This class is auto generated by the swagger code generator program.
# https://github.com/swagger-api/swagger-codegen.git
# Do not edit the class manually.

defmodule EstuaryAPI.Api.Autoretrieve do
  @moduledoc """
  API calls for all endpoints tagged `Autoretrieve`.
  """

  alias EstuaryAPI.Connection
  import EstuaryAPI.RequestBuilder


  @doc """
  Register autoretrieve server
  This endpoint registers a new autoretrieve server

  ## Parameters

  - connection (EstuaryAPI.Connection): Connection to server
  - addresses (String.t): Autoretrieve&#39;s comma-separated list of addresses
  - pub_key (String.t): Autoretrieve&#39;s public key
  - opts (KeywordList): [optional] Optional parameters

  ## Returns

  {:ok, %EstuaryAPI.Model.String.t{}} on success
  {:error, info} on failure
  """
  @spec admin_autoretrieve_init_post(Tesla.Env.client, String.t, String.t, keyword()) :: {:ok, String.t} | {:error, Tesla.Env.t}
  def admin_autoretrieve_init_post(connection, addresses, pub_key, _opts \\ []) do
    %{}
    |> method(:post)
    |> url("/admin/autoretrieve/init")
    |> add_param(:form, :"addresses", addresses)
    |> add_param(:form, :"pubKey", pub_key)
    |> Enum.into([])
    |> (&Connection.request(connection, &1)).()
    |> decode(false)
  end

  @doc """
  List autoretrieve servers
  This endpoint lists all registered autoretrieve servers

  ## Parameters

  - connection (EstuaryAPI.Connection): Connection to server
  - opts (KeywordList): [optional] Optional parameters

  ## Returns

  {:ok, %EstuaryAPI.Model.String.t{}} on success
  {:error, info} on failure
  """
  @spec admin_autoretrieve_list_get(Tesla.Env.client, keyword()) :: {:ok, String.t} | {:error, Tesla.Env.t}
  def admin_autoretrieve_list_get(connection, _opts \\ []) do
    %{}
    |> method(:get)
    |> url("/admin/autoretrieve/list")
    |> Enum.into([])
    |> (&Connection.request(connection, &1)).()
    |> decode(false)
  end

  @doc """
  Marks autoretrieve server as up
  This endpoint updates the lastConnection field for autoretrieve

  ## Parameters

  - connection (EstuaryAPI.Connection): Connection to server
  - token (String.t): Autoretrieve&#39;s auth token
  - opts (KeywordList): [optional] Optional parameters

  ## Returns

  {:ok, %EstuaryAPI.Model.String.t{}} on success
  {:error, info} on failure
  """
  @spec autoretrieve_heartbeat_post(Tesla.Env.client, String.t, keyword()) :: {:ok, String.t} | {:error, Tesla.Env.t}
  def autoretrieve_heartbeat_post(connection, token, _opts \\ []) do
    %{}
    |> method(:post)
    |> url("/autoretrieve/heartbeat")
    |> add_param(:headers, :"token", token)
    |> Enum.into([])
    |> (&Connection.request(connection, &1)).()
    |> decode(false)
  end
end
