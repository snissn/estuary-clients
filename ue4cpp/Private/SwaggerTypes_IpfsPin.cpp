/**
 * Estuary API
 * This is the API for the Estuary application.
 *
 * OpenAPI spec version: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
#include "SwaggerTypes_IpfsPin.h"

#include "SwaggerModule.h"
#include "SwaggerHelpers.h"

#include "Templates/SharedPointer.h"

namespace Swagger 
{

void SwaggerTypes_IpfsPin::WriteJson(JsonWriter& Writer) const
{
	Writer->WriteObjectStart();
	if (Cid.IsSet())
	{
		Writer->WriteIdentifierPrefix(TEXT("cid")); WriteJsonValue(Writer, Cid.GetValue());	
	}
	if (Meta.IsSet())
	{
		Writer->WriteIdentifierPrefix(TEXT("meta")); WriteJsonValue(Writer, Meta.GetValue());	
	}
	if (Name.IsSet())
	{
		Writer->WriteIdentifierPrefix(TEXT("name")); WriteJsonValue(Writer, Name.GetValue());	
	}
	if (Origins.IsSet())
	{
		Writer->WriteIdentifierPrefix(TEXT("origins")); WriteJsonValue(Writer, Origins.GetValue());	
	}
	Writer->WriteObjectEnd();
}

bool SwaggerTypes_IpfsPin::FromJson(const TSharedPtr<FJsonObject>& JsonObject)
{
	bool ParseSuccess = true;

	ParseSuccess &= TryGetJsonValue(JsonObject, TEXT("cid"), Cid);
	ParseSuccess &= TryGetJsonValue(JsonObject, TEXT("meta"), Meta);
	ParseSuccess &= TryGetJsonValue(JsonObject, TEXT("name"), Name);
	ParseSuccess &= TryGetJsonValue(JsonObject, TEXT("origins"), Origins);

	return ParseSuccess;
}
}