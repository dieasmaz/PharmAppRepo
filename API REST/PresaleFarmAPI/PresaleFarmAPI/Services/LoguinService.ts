const driver = require("mssql");
import settingsDb = require("../Settings");

export var loguinUser = (userObject,callBack) => {
    const conn = new driver.ConnectionPool(settingsDb.dbConfig);

    conn.connect()
        .then(() => {
            const request = new driver.Request(conn);

            request.input("USER", driver.TYPES.NVarChar, userObject.user);
            request.input("PASSWORD", driver.TYPES.NVarChar, userObject.password);
            request.execute("[presalefarm].[PHARM_SP_LOGUIN_USER]", (err, result) => {
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