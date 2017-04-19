"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var driver = require("mssql");
var settingsDb = require("../Settings");
exports.loguinUser = function (userObject, callBack) {
    var conn = new driver.ConnectionPool(settingsDb.dbConfig);
    conn.connect()
        .then(function () {
        var request = new driver.Request(conn);
        request.input("USER", driver.TYPES.NVarChar, userObject.user);
        request.input("PASSWORD", driver.TYPES.NVarChar, userObject.password);
        request.execute("[presalefarm].[PHARM_SP_LOGUIN_USER]", function (err, result) {
            if (err) {
                console.log(err);
                callBack(null, err);
            }
            else {
                callBack(result);
            }
        });
    })
        .catch(function (error) {
        console.log(error);
        callBack(null, error);
    });
};
//# sourceMappingURL=LoguinService.js.map