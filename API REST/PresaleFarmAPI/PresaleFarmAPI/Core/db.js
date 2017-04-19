"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var driver = require("mssql");
var settingsDb = require("../Settings");
exports.executeSql = function (sql, callBack) {
    var conn = new driver.ConnectionPool(settingsDb.dbConfig);
    conn.connect()
        .then(function () {
        var request = new driver.Request(conn);
        request.query(sql)
            .then(function (recordset) {
            callBack(recordset);
        })
            .catch(function (error) {
            console.log(error);
            callBack(null, error);
        });
    })
        .catch(function (error) {
        console.log(error);
        callBack(null, error);
    });
};
exports.executeSp = function (sp, callBack, parameters) {
    var conn = new driver.ConnectionPool(settingsDb.dbConfig);
    conn.connect()
        .then(function () {
        var request = new driver.Request(conn);
        for (var _i = 0, parameters_1 = parameters; _i < parameters_1.length; _i++) {
            var param = parameters_1[_i];
            request.input(param.nameParameter, param.sqlType.toString().replace(/"/g, ""), param.value);
        }
        request.execute(sp, function (err, result) {
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
//# sourceMappingURL=db.js.map