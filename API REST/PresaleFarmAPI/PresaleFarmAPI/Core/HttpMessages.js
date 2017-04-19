"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var settingsDb = require("../Settings");
exports.show500Error = function (req, resp, err) {
    if (settingsDb.httpMsgsFromat === "HTML") {
        //TODO: Respuesta en formato HTML
        resp.writeHead(500, "Internal Server Error", { "Content-Type": "text/html" });
        resp.write("\n                <html>\n                    <head>\n                        <title>\n                            500\n                        </title>\n                    </head>\n                    <body>\n                        500: Internal Server Error. Details: " + err + "\n                    </body>\n                </html>\n            ");
    }
    else {
        //TODO: Respuesta en formato JSON
        resp.writeHead(500, "Internal Server Error.", { "Content-Type": "application/json" });
        resp.write(JSON.stringify({ data: err }));
    }
    resp.end();
};
exports.sendData = function (req, resp, data) {
    resp.writeHead(200, { "Content-Type": "application/json" });
    if (data) {
        resp.write(JSON.stringify(data.recordset));
    }
    resp.end();
};
exports.show405Error = function (req, resp) {
    if (settingsDb.httpMsgsFromat === "HTML") {
        //TODO: Respuesta en formato HTML
        resp.writeHead(405, "Method not supported", { "Content-Type": "text/html" });
        resp.write("\n                <html>\n                    <head>\n                        <title>\n                            405\n                        </title>\n                    </head>\n                    <body>\n                        405: Method not supported.\n                    </body>\n                </html>\n            ");
    }
    else {
        //TODO: Respuesta en formato JSON
        resp.writeHead(405, "Method not supported", { "Content-Type": "application/json" });
        resp.write(JSON.stringify({ data: "405: Method not supported." }));
    }
    resp.end();
};
exports.show404Error = function (req, resp) {
    if (settingsDb.httpMsgsFromat === "HTML") {
        //TODO: Respuesta en formato HTML
        resp.writeHead(404, "Resource not found", { "Content-Type": "text/html" });
        resp.write("\n                <html>\n                    <head>\n                        <title>\n                            404\n                        </title>\n                    </head>\n                    <body>\n                        404: Resource not found.\n                    </body>\n                </html>\n            ");
    }
    else {
        //TODO: Respuesta en formato JSON
        resp.writeHead(404, "Resource not found", { "Content-Type": "application/json" });
        resp.write(JSON.stringify({ data: "404: Resource not found." }));
    }
    resp.end();
};
exports.show413Error = function (req, resp) {
    if (settingsDb.httpMsgsFromat === "HTML") {
        //TODO: Respuesta en formato HTML
        resp.writeHead(413, "Request Entity Too Large", { "Content-Type": "text/html" });
        resp.write("\n                <html>\n                    <head>\n                        <title>\n                            413\n                        </title>\n                    </head>\n                    <body>\n                        413: Request Entity Too Large.\n                    </body>\n                </html>\n            ");
    }
    else {
        //TODO: Respuesta en formato JSON
        resp.writeHead(413, "Request Entity Too Large", { "Content-Type": "application/json" });
        resp.write(JSON.stringify({ data: "413: Request Entity Too Large." }));
    }
    resp.end();
};
exports.send200 = function (req, resp) {
    resp.writeHead(200, { "Content-Type": "application/json" });
    resp.end();
};
//# sourceMappingURL=HttpMessages.js.map