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

#include "SWGUserApi.h"
#include "SWGHelpers.h"
#include "SWGModelFactory.h"
#include "SWGQObjectWrapper.h"

#include <QJsonArray>
#include <QJsonDocument>

namespace Swagger {

SWGUserApi::SWGUserApi() {}

SWGUserApi::~SWGUserApi() {}

SWGUserApi::SWGUserApi(QString host, QString basePath) {
    this->host = host;
    this->basePath = basePath;
}

void
SWGUserApi::userApiKeysGet() {
    QString fullPath;
    fullPath.append(this->host).append(this->basePath).append("/user/api-keys");



    SWGHttpRequestWorker *worker = new SWGHttpRequestWorker();
    SWGHttpRequestInput input(fullPath, "GET");





    foreach(QString key, this->defaultHeaders.keys()) {
        input.headers.insert(key, this->defaultHeaders.value(key));
    }

    connect(worker,
            &SWGHttpRequestWorker::on_execution_finished,
            this,
            &SWGUserApi::userApiKeysGetCallback);

    worker->execute(&input);
}

void
SWGUserApi::userApiKeysGetCallback(SWGHttpRequestWorker * worker) {
    QString msg;
    QString error_str = worker->error_str;
    QNetworkReply::NetworkError error_type = worker->error_type;

    if (worker->error_type == QNetworkReply::NoError) {
        msg = QString("Success! %1 bytes").arg(worker->response.length());
    }
    else {
        msg = "Error: " + worker->error_str;
    }

    QList<QList<SWGMain.getApiKeysResp*>*>* output = new QList<QList<SWGMain.getApiKeysResp*>*>();
    QString json(worker->response);
    QByteArray array (json.toStdString().c_str());
    QJsonDocument doc = QJsonDocument::fromJson(array);
    QJsonArray jsonArray = doc.array();
    auto wrapper = new SWGQObjectWrapper<QList<QList<SWGMain.getApiKeysResp*>*>*> (output);
    wrapper->deleteLater();
    foreach(QJsonValue obj, jsonArray) {
        QList* o = new QList();
        QJsonObject jv = obj.toObject();
        QJsonObject * ptr = (QJsonObject*)&jv;
        o->fromJsonObject(*ptr);
        auto objwrapper = new SWGQObjectWrapper<QList*> (o);
        objwrapper->deleteLater();
        output->append(o);
    }
    worker->deleteLater();

    if (worker->error_type == QNetworkReply::NoError) {
        emit userApiKeysGetSignal(output);
    } else {
        emit userApiKeysGetSignalE(output, error_type, error_str);
        emit userApiKeysGetSignalEFull(worker, error_type, error_str);
    }
}

void
SWGUserApi::userApiKeysKeyOrHashDelete(QString* key_or_hash) {
    QString fullPath;
    fullPath.append(this->host).append(this->basePath).append("/user/api-keys/{key_or_hash}");

    QString key_or_hashPathParam("{"); key_or_hashPathParam.append("key_or_hash").append("}");
    fullPath.replace(key_or_hashPathParam, stringValue(key_or_hash));


    SWGHttpRequestWorker *worker = new SWGHttpRequestWorker();
    SWGHttpRequestInput input(fullPath, "DELETE");





    foreach(QString key, this->defaultHeaders.keys()) {
        input.headers.insert(key, this->defaultHeaders.value(key));
    }

    connect(worker,
            &SWGHttpRequestWorker::on_execution_finished,
            this,
            &SWGUserApi::userApiKeysKeyOrHashDeleteCallback);

    worker->execute(&input);
}

void
SWGUserApi::userApiKeysKeyOrHashDeleteCallback(SWGHttpRequestWorker * worker) {
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
        emit userApiKeysKeyOrHashDeleteSignal(output);
    } else {
        emit userApiKeysKeyOrHashDeleteSignalE(output, error_type, error_str);
        emit userApiKeysKeyOrHashDeleteSignalEFull(worker, error_type, error_str);
    }
}

void
SWGUserApi::userApiKeysPost(QString* expiry, QString* perms) {
    QString fullPath;
    fullPath.append(this->host).append(this->basePath).append("/user/api-keys");


    if (fullPath.indexOf("?") > 0)
      fullPath.append("&");
    else
      fullPath.append("?");
    fullPath.append(QUrl::toPercentEncoding("expiry"))
        .append("=")
        .append(QUrl::toPercentEncoding(stringValue(expiry)));

    if (fullPath.indexOf("?") > 0)
      fullPath.append("&");
    else
      fullPath.append("?");
    fullPath.append(QUrl::toPercentEncoding("perms"))
        .append("=")
        .append(QUrl::toPercentEncoding(stringValue(perms)));


    SWGHttpRequestWorker *worker = new SWGHttpRequestWorker();
    SWGHttpRequestInput input(fullPath, "POST");





    foreach(QString key, this->defaultHeaders.keys()) {
        input.headers.insert(key, this->defaultHeaders.value(key));
    }

    connect(worker,
            &SWGHttpRequestWorker::on_execution_finished,
            this,
            &SWGUserApi::userApiKeysPostCallback);

    worker->execute(&input);
}

void
SWGUserApi::userApiKeysPostCallback(SWGHttpRequestWorker * worker) {
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
    SWGMain.getApiKeysResp* output = static_cast<SWGMain.getApiKeysResp*>(create(json, QString("SWGMain.getApiKeysResp")));
    auto wrapper = new SWGQObjectWrapper<SWGMain.getApiKeysResp*> (output);
    wrapper->deleteLater();
    worker->deleteLater();

    if (worker->error_type == QNetworkReply::NoError) {
        emit userApiKeysPostSignal(output);
    } else {
        emit userApiKeysPostSignalE(output, error_type, error_str);
        emit userApiKeysPostSignalEFull(worker, error_type, error_str);
    }
}

void
SWGUserApi::userExportGet() {
    QString fullPath;
    fullPath.append(this->host).append(this->basePath).append("/user/export");



    SWGHttpRequestWorker *worker = new SWGHttpRequestWorker();
    SWGHttpRequestInput input(fullPath, "GET");





    foreach(QString key, this->defaultHeaders.keys()) {
        input.headers.insert(key, this->defaultHeaders.value(key));
    }

    connect(worker,
            &SWGHttpRequestWorker::on_execution_finished,
            this,
            &SWGUserApi::userExportGetCallback);

    worker->execute(&input);
}

void
SWGUserApi::userExportGetCallback(SWGHttpRequestWorker * worker) {
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
        emit userExportGetSignal(output);
    } else {
        emit userExportGetSignalE(output, error_type, error_str);
        emit userExportGetSignalEFull(worker, error_type, error_str);
    }
}

void
SWGUserApi::userStatsGet() {
    QString fullPath;
    fullPath.append(this->host).append(this->basePath).append("/user/stats");



    SWGHttpRequestWorker *worker = new SWGHttpRequestWorker();
    SWGHttpRequestInput input(fullPath, "GET");





    foreach(QString key, this->defaultHeaders.keys()) {
        input.headers.insert(key, this->defaultHeaders.value(key));
    }

    connect(worker,
            &SWGHttpRequestWorker::on_execution_finished,
            this,
            &SWGUserApi::userStatsGetCallback);

    worker->execute(&input);
}

void
SWGUserApi::userStatsGetCallback(SWGHttpRequestWorker * worker) {
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
        emit userStatsGetSignal(output);
    } else {
        emit userStatsGetSignalE(output, error_type, error_str);
        emit userStatsGetSignalEFull(worker, error_type, error_str);
    }
}


}
