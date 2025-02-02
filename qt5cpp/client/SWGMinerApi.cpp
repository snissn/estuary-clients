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

#include "SWGMinerApi.h"
#include "SWGHelpers.h"
#include "SWGModelFactory.h"
#include "SWGQObjectWrapper.h"

#include <QJsonArray>
#include <QJsonDocument>

namespace Swagger {

SWGMinerApi::SWGMinerApi() {}

SWGMinerApi::~SWGMinerApi() {}

SWGMinerApi::SWGMinerApi(QString host, QString basePath) {
    this->host = host;
    this->basePath = basePath;
}

void
SWGMinerApi::publicMinersDealsMinerGet(QString* miner, QString* ignore_failed) {
    QString fullPath;
    fullPath.append(this->host).append(this->basePath).append("/public/miners/deals/{miner}");

    QString minerPathParam("{"); minerPathParam.append("miner").append("}");
    fullPath.replace(minerPathParam, stringValue(miner));

    if (fullPath.indexOf("?") > 0)
      fullPath.append("&");
    else
      fullPath.append("?");
    fullPath.append(QUrl::toPercentEncoding("ignore-failed"))
        .append("=")
        .append(QUrl::toPercentEncoding(stringValue(ignore_failed)));


    SWGHttpRequestWorker *worker = new SWGHttpRequestWorker();
    SWGHttpRequestInput input(fullPath, "GET");





    foreach(QString key, this->defaultHeaders.keys()) {
        input.headers.insert(key, this->defaultHeaders.value(key));
    }

    connect(worker,
            &SWGHttpRequestWorker::on_execution_finished,
            this,
            &SWGMinerApi::publicMinersDealsMinerGetCallback);

    worker->execute(&input);
}

void
SWGMinerApi::publicMinersDealsMinerGetCallback(SWGHttpRequestWorker * worker) {
    QString msg;
    QString error_str = worker->error_str;
    QNetworkReply::NetworkError error_type = worker->error_type;

    if (worker->error_type == QNetworkReply::NoError) {
        msg = QString("Success! %1 bytes").arg(worker->response.length());
    }
    else {
        msg = "Error: " + worker->error_str;
    }

    QString json(worker->response);
    QString* output = static_cast<QString*>(create(json, QString("QString")));
    auto wrapper = new SWGQObjectWrapper<QString*> (output);
    wrapper->deleteLater();
    worker->deleteLater();

    if (worker->error_type == QNetworkReply::NoError) {
        emit publicMinersDealsMinerGetSignal(output);
    } else {
        emit publicMinersDealsMinerGetSignalE(output, error_type, error_str);
        emit publicMinersDealsMinerGetSignalEFull(worker, error_type, error_str);
    }
}

void
SWGMinerApi::publicMinersStatsMinerGet(QString* miner) {
    QString fullPath;
    fullPath.append(this->host).append(this->basePath).append("/public/miners/stats/{miner}");

    QString minerPathParam("{"); minerPathParam.append("miner").append("}");
    fullPath.replace(minerPathParam, stringValue(miner));


    SWGHttpRequestWorker *worker = new SWGHttpRequestWorker();
    SWGHttpRequestInput input(fullPath, "GET");





    foreach(QString key, this->defaultHeaders.keys()) {
        input.headers.insert(key, this->defaultHeaders.value(key));
    }

    connect(worker,
            &SWGHttpRequestWorker::on_execution_finished,
            this,
            &SWGMinerApi::publicMinersStatsMinerGetCallback);

    worker->execute(&input);
}

void
SWGMinerApi::publicMinersStatsMinerGetCallback(SWGHttpRequestWorker * worker) {
    QString msg;
    QString error_str = worker->error_str;
    QNetworkReply::NetworkError error_type = worker->error_type;

    if (worker->error_type == QNetworkReply::NoError) {
        msg = QString("Success! %1 bytes").arg(worker->response.length());
    }
    else {
        msg = "Error: " + worker->error_str;
    }

    QString json(worker->response);
    QString* output = static_cast<QString*>(create(json, QString("QString")));
    auto wrapper = new SWGQObjectWrapper<QString*> (output);
    wrapper->deleteLater();
    worker->deleteLater();

    if (worker->error_type == QNetworkReply::NoError) {
        emit publicMinersStatsMinerGetSignal(output);
    } else {
        emit publicMinersStatsMinerGetSignalE(output, error_type, error_str);
        emit publicMinersStatsMinerGetSignalEFull(worker, error_type, error_str);
    }
}


}
