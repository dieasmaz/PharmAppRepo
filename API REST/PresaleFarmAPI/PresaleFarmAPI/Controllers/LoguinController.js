"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var httpMsgs = require("../Core/HttpMessages");
//Import Service
var loguinSrv = require("../Services/LoguinService");
exports.get = function (req, resp) {
    var userObj = {
        "user": req.headers.user,
        "password": req.headers.password
    };
    loguinSrv.loguinUser(userObj, function (data, err) {
        if (err) {
            httpMsgs.show500Error(req, resp, err);
        }
        else {
            httpMsgs.sendData(req, resp, data);
        }
    });
};
//# sourceMappingURL=LoguinController.js.map