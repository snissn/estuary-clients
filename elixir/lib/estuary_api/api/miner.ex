# NOTE: This class is auto generated by the swagger code generator program.
# https://github.com/swagger-api/swagger-codegen.git
# Do not edit the class manually.

defmodule EstuaryAPI.Api.Miner do
  @moduledoc """
  API calls for all endpoints tagged `Miner`.
  """

  alias EstuaryAPI.Connection
  import EstuaryAPI.RequestBuilder


  @doc """
  Get all miners deals
  This endpoint returns all miners deals

  ## Parameters

  - connection (EstuaryAPI.Connection): Connection to server
  - miner (String.t): Filter by miner
  - opts (KeywordList): [optional] Optional parameters
    - :ignore_failed (String.t): Ignore Failed

  ## Returns

  {:ok, %EstuaryAPI.Model.String.t{}} on success
  {:error, info} on failure
  """
  @spec public_miners_deals_miner_get(Tesla.Env.client, String.t, keyword()) :: {:ok, String.t} | {:error, Tesla.Env.t}
  def public_miners_deals_miner_get(connection, miner, opts \\ []) do
    optional_params = %{
      :"ignore-failed" => :query
    }
    %{}
    |> method(:get)
    |> url("/public/miners/deals/#{miner}")
    |> add_optional_params(optional_params, opts)
    |> Enum.into([])
    |> (&Connection.request(connection, &1)).()
    |> decode(false)
  end

  @doc """
  Get miner stats
  This endpoint returns miner stats

  ## Parameters

  - connection (EstuaryAPI.Connection): Connection to server
  - miner (String.t): Filter by miner
  - opts (KeywordList): [optional] Optional parameters

  ## Returns

  {:ok, %EstuaryAPI.Model.String.t{}} on success
  {:error, info} on failure
  """
  @spec public_miners_stats_miner_get(Tesla.Env.client, String.t, keyword()) :: {:ok, String.t} | {:error, Tesla.Env.t}
  def public_miners_stats_miner_get(connection, miner, _opts \\ []) do
    %{}
    |> method(:get)
    |> url("/public/miners/stats/#{miner}")
    |> Enum.into([])
    |> (&Connection.request(connection, &1)).()
    |> decode(false)
  end
end
