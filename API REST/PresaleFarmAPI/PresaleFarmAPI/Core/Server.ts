const http = require("http");
import settingsDb = require("../Settings");
import httpMsgs = require("./HttpMessages");

//Import of Controlers
import productCtrl = require("../Controllers/ProductController");
import loguinCtrl = require("../Controllers/LoguinController");

http.createServer((req, resp) => {

    switch (req.method) {
        case "GET":

            if (req.url === "/") {
                resp.end();
            } else if (req.url === "/loguin") {
                loguinCtrl.get(req, resp);
            }
            else if (req.url === "/product") {
                productCtrl.getList(req, resp);
            } else {
                const skuPatt = "[0-9]";
                const patt = new RegExp(`/product/${skuPatt}`);
                if (patt.test(req.url)) {
                    let skuCode = parseInt(req.url.split("/")[2]);
                    productCtrl.get(req, resp, skuCode);
                    skuCode = null;
                } else {
                    httpMsgs.show404Error(req, resp);
                }
            }

            break;

        case "POST":
            if (req.url === "/product") {
                let reqBody = "";
                req.on("data",
                    (data) => {
                        reqBody += data;
                        if (reqBody.length > 1e7) // Mayor a 10 MB
                        {
                            httpMsgs.show413Error(req, resp);
                        }
                    });
                req.on("end",
                    () => {
                        productCtrl.add(req, resp, reqBody);
                    });
            } else {
                httpMsgs.show404Error(req, resp);
            }
            break;

        case "PUT":
            if (req.url === "/product") {

            } else {
                httpMsgs.show404Error(req, resp);
            }
            break;

        case "DELETE":
            if (req.url === "/product") {

            } else {
                httpMsgs.show404Error(req, resp);
            }
            break;

        default:
            httpMsgs.show405Error(req, resp);
            break;

    }

}).listen(settingsDb.serverPort, () => {
    console.log(`Server started at: ${settingsDb.serverPort}`);
})