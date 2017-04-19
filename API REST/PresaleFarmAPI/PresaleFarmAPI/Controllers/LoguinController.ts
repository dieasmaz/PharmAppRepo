import httpMsgs = require("../Core/HttpMessages");

//Import Service
import loguinSrv = require("../Services/LoguinService");

export var get = (req, resp) => {
    const userObj = {
        "user": req.headers.user
        ,"password": req.headers.password
    };

    loguinSrv.loguinUser(userObj,(data, err) => {
       if (err) {
           httpMsgs.show500Error(req, resp, err);
       } else {
           httpMsgs.sendData(req, resp, data);
       }
    });
}