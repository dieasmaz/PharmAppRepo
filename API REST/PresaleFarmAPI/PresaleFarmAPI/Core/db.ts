const driver = require("mssql");
import settingsDb = require("../Settings");


export var executeSql = (sql, callBack) => {

    const conn = new driver.ConnectionPool(settingsDb.dbConfig);

    conn.connect()
        .then(() => {

            const request = new driver.Request(conn);

            request.query(sql)
                .then((recordset) => {
                    callBack(recordset);
                })
                .catch((error) => {
                    console.log(error);
                    callBack(null, error);
                });

        })
        .catch((error) => {
            console.log(error);
            callBack(null, error);
        });

};

export var executeSp = (sp, callBack, parameters? ) => {
    const conn = new driver.ConnectionPool(settingsDb.dbConfig);

    conn.connect()
        .then(() => {
            const request = new driver.Request(conn);

            for (let param of parameters) {
                request.input(param.nameParameter, param.sqlType.toString().replace(/"/g,""), param.value);
            }

            request.execute(sp,(err, result) => {
                if (err) {
                    console.log(err);
                    callBack(null, err);
                } else {
                    callBack(result);
                }
            });

        })
        .catch((error) => {
            console.log(error);
            callBack(null, error);
        });
}