"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db = require("../Core/db");
var httpMsgs = require("../Core/HttpMessages");
exports.getList = function (req, resp) {
    db.executeSp("[presalefarm].[PHARM_GET_SKU]", function (data, err) {
        if (err) {
            httpMsgs.show500Error(req, resp, err);
        }
        else {
            httpMsgs.sendData(req, resp, data);
        }
    }, []);
};
exports.get = function (req, resp, codeSku) {
    var parameters = [
        { nameParameter: "CODE_SKU", sqlType: "sql.NVarChar", value: codeSku }
    ];
    db.executeSp("[presalefarm].[PHARM_GET_SKU]", function (data, err) {
        if (err) {
            httpMsgs.show500Error(req, resp, err);
        }
        else {
            httpMsgs.sendData(req, resp, data);
        }
    }, parameters);
    parameters = null;
};
exports.add = function (req, resp, reqBody) {
    try {
        if (!reqBody)
            throw new Error("Input not valid.");
        var skuObject = JSON.parse(reqBody);
        if (skuObject) {
            var sql = "INSERT INTO [presalefarm].[PRODUCT_CATALOG] (CODE_SKU, DESCRIPTION_SKU, HANDLE_SERIAL) \n                        VALUES('" + skuObject.CODE_SKU + "', '" + skuObject.DESCRIPTION_SKU + "', " + skuObject.HANDLE_SERIAL + ")";
            console.log("Inserting new sku: " + sql);
            db.executeSql(sql, function (data, err) {
                if (err) {
                    httpMsgs.show500Error(req, resp, err);
                }
                else {
                    httpMsgs.send200(req, resp);
                }
            });
        }
        else {
            throw new Error("Not data available.");
        }
    }
    catch (e) {
        httpMsgs.show500Error(req, resp, e);
    }
};
exports.update = function (req, resp, reqBody) {
};
exports.deleteReg = function (req, resp, reqBody) {
};
//# sourceMappingURL=ProductController.js.map