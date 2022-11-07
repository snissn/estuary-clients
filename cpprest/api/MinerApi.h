/**
 * Estuary API
 * This is the API for the Estuary application.
 *
 * OpenAPI spec version: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator 2.4.28.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

/*
 * MinerApi.h
 *
 * 
 */

#ifndef IO_SWAGGER_CLIENT_API_MinerApi_H_
#define IO_SWAGGER_CLIENT_API_MinerApi_H_


#include "../ApiClient.h"

#include "Util.HttpError.h"
#include <cpprest/details/basic_types.h>

#include <boost/optional.hpp>

namespace io {
namespace swagger {
namespace client {
namespace api {

using namespace io::swagger::client::model;

class  MinerApi
{
public:
    MinerApi( std::shared_ptr<ApiClient> apiClient );
    virtual ~MinerApi();
    /// <summary>
    /// Get all miners deals
    /// </summary>
    /// <remarks>
    /// This endpoint returns all miners deals
    /// </remarks>
    /// <param name="miner">Filter by miner</param>
    /// <param name="ignoreFailed">Ignore Failed (optional)</param>
    pplx::task<utility::string_t> publicMinersDealsMinerGet(
        utility::string_t miner,
        boost::optional<utility::string_t> ignoreFailed
    );
    /// <summary>
    /// Get miner stats
    /// </summary>
    /// <remarks>
    /// This endpoint returns miner stats
    /// </remarks>
    /// <param name="miner">Filter by miner</param>
    pplx::task<utility::string_t> publicMinersStatsMinerGet(
        utility::string_t miner
    );

protected:
    std::shared_ptr<ApiClient> m_ApiClient;
};

}
}
}
}

#endif /* IO_SWAGGER_CLIENT_API_MinerApi_H_ */

