"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var settingsDb = require("../Settings");
var httpMsgs = require("./HttpMessages");
//Import of Controlers
var productCtrl = require("../Controllers/ProductController");
var loguinCtrl = require("../Controllers/LoguinController");
http.createServer(function (req, resp) {
    switch (req.method) {
        case "GET":
            if (req.url === "/") {
                resp.end();
            }
            else if (req.url === "/loguin") {
                loguinCtrl.get(req, resp);
            }
            else if (req.url === "/product") {
                productCtrl.getList(req, resp);
            }
            else {
                var skuPatt = "[0-9]";
                var patt = new RegExp("/product/" + skuPatt);
                if (patt.test(req.url)) {
                    var skuCode = parseInt(req.url.split("/")[2]);
                    productCtrl.get(req, resp, skuCode);
                    skuCode = null;
                }
                else {
                    httpMsgs.show404Error(req, resp);
                }
            }
            break;
        case "POST":
            if (req.url === "/product") {
                var reqBody_1 = "";
                req.on("data", function (data) {
                    reqBody_1 += data;
                    if (reqBody_1.length > 1e7) {
                        httpMsgs.show413Error(req, resp);
                    }
                });
                req.on("end", function () {
                    productCtrl.add(req, resp, reqBody_1);
                });
            }
            else {
                httpMsgs.show404Error(req, resp);
            }
            break;
        case "PUT":
            if (req.url === "/product") {
            }
            else {
                httpMsgs.show404Error(req, resp);
            }
            break;
        case "DELETE":
            if (req.url === "/product") {
            }
            else {
                httpMsgs.show404Error(req, resp);
            }
            break;
        default:
            httpMsgs.show405Error(req, resp);
            break;
    }
}).listen(settingsDb.serverPort, function () {
    console.log("Server started at: " + settingsDb.serverPort);
});
//# sourceMappingURL=Server.js.map