mod collections_collection;
pub use self::collections_collection::CollectionsCollection;
mod main_channel_id_param;
pub use self::main_channel_id_param::MainChannelIdParam;
mod main_create_collection_body;
pub use self::main_create_collection_body::MainCreateCollectionBody;
mod main_delete_content_from_collection_body;
pub use self::main_delete_content_from_collection_body::MainDeleteContentFromCollectionBody;
mod main_estimate_deal_body;
pub use self::main_estimate_deal_body::MainEstimateDealBody;
mod main_get_api_keys_resp;
pub use self::main_get_api_keys_resp::MainGetApiKeysResp;
mod main_import_deal_body;
pub use self::main_import_deal_body::MainImportDealBody;
mod types_ipfs_pin;
pub use self::types_ipfs_pin::TypesIpfsPin;
mod util_content_add_ipfs_body;
pub use self::util_content_add_ipfs_body::UtilContentAddIpfsBody;
mod util_content_add_response;
pub use self::util_content_add_response::UtilContentAddResponse;
mod util_content_create_body;
pub use self::util_content_create_body::UtilContentCreateBody;
mod util_http_error;
pub use self::util_http_error::UtilHttpError;

// TODO(farcaller): sort out files
pub struct File;
