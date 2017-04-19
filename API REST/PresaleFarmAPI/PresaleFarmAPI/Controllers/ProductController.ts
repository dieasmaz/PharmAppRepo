import db = require("../Core/db");
import httpMsgs = require("../Core/HttpMessages");

export var getList = (req, resp) => {
   db.executeSp("[presalefarm].[PHARM_GET_SKU]",(data,err) => {
           if (err) {
               httpMsgs.show500Error(req, resp, err);
           } else {
               httpMsgs.sendData(req, resp, data);
           }
    },[]);
}

export var get = (req, resp, codeSku) => {

    let parameters = [
        { nameParameter: "CODE_SKU", sqlType: "sql.NVarChar", value: codeSku}
    ];

    db.executeSp("[presalefarm].[PHARM_GET_SKU]", (data, err) => {
        if (err) {
            httpMsgs.show500Error(req, resp, err);
        } else {
            httpMsgs.sendData(req, resp, data);
        }
    }, parameters);

    parameters = null;
}

export var add = (req, resp, reqBody) => {
    try {
        if (!reqBody) throw new Error("Input not valid.");

        const skuObject = JSON.parse(reqBody);

        if (skuObject) {

            let sql = `INSERT INTO [presalefarm].[PRODUCT_CATALOG] (CODE_SKU, DESCRIPTION_SKU, HANDLE_SERIAL) 
                        VALUES('${skuObject.CODE_SKU}', '${skuObject.DESCRIPTION_SKU}', ${skuObject.HANDLE_SERIAL})`;

            console.log(`Inserting new sku: ${sql}`);

            db.executeSql(sql, (data, err) => {
                if (err) {
                    httpMsgs.show500Error(req, resp, err);
                } else {
                    httpMsgs.send200(req, resp);
                }
            });

        } else {
            throw new Error("Not data available.");
        }


    } catch (e) {
        httpMsgs.show500Error(req,resp, e);
    } 
}

export var update = (req, resp, reqBody) => {

}

export var deleteReg = (req, resp, reqBody) => {

}