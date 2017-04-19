import settingsDb = require("../Settings");

export var show500Error = (req, resp, err) => {
    if (settingsDb.httpMsgsFromat === "HTML") {
        //TODO: Respuesta en formato HTML
        resp.writeHead(500, "Internal Server Error", { "Content-Type": "text/html" });
        resp.write(`
                <html>
                    <head>
                        <title>
                            500
                        </title>
                    </head>
                    <body>
                        500: Internal Server Error. Details: ${err}
                    </body>
                </html>
            `);
    } else {
        //TODO: Respuesta en formato JSON
        resp.writeHead(500, "Internal Server Error.", { "Content-Type": "application/json" });
        resp.write(JSON.stringify({ data: err }));
    }
    resp.end();
}

export var sendData = (req, resp, data) => {
    resp.writeHead(200, { "Content-Type": "application/json" });
    if (data) {
        resp.write(JSON.stringify(data.recordset));
    }
    resp.end();
}

export var show405Error = (req, resp) => {
    if (settingsDb.httpMsgsFromat === "HTML") {
        //TODO: Respuesta en formato HTML
        resp.writeHead(405, "Method not supported", { "Content-Type": "text/html" });
        resp.write(`
                <html>
                    <head>
                        <title>
                            405
                        </title>
                    </head>
                    <body>
                        405: Method not supported.
                    </body>
                </html>
            `);
    } else {
        //TODO: Respuesta en formato JSON
        resp.writeHead(405, "Method not supported", { "Content-Type": "application/json" });
        resp.write(JSON.stringify({ data: "405: Method not supported." }));
    }
    resp.end();
}

export var show404Error = (req, resp) => {
    if (settingsDb.httpMsgsFromat === "HTML") {
        //TODO: Respuesta en formato HTML
        resp.writeHead(404, "Resource not found", { "Content-Type": "text/html" });
        resp.write(`
                <html>
                    <head>
                        <title>
                            404
                        </title>
                    </head>
                    <body>
                        404: Resource not found.
                    </body>
                </html>
            `);
    } else {
        //TODO: Respuesta en formato JSON
        resp.writeHead(404, "Resource not found", { "Content-Type": "application/json" });
        resp.write(JSON.stringify({ data: "404: Resource not found." }));
    }
    resp.end();
}

export var show413Error = (req, resp) => {
    if (settingsDb.httpMsgsFromat === "HTML") {
        //TODO: Respuesta en formato HTML
        resp.writeHead(413, "Request Entity Too Large", { "Content-Type": "text/html" });
        resp.write(`
                <html>
                    <head>
                        <title>
                            413
                        </title>
                    </head>
                    <body>
                        413: Request Entity Too Large.
                    </body>
                </html>
            `);
    } else {
        //TODO: Respuesta en formato JSON
        resp.writeHead(413, "Request Entity Too Large", { "Content-Type": "application/json" });
        resp.write(JSON.stringify({ data: "413: Request Entity Too Large." }));
    }
    resp.end();
}

export var send200 = (req, resp) => {
    resp.writeHead(200, { "Content-Type": "application/json" });
    resp.end();
}

