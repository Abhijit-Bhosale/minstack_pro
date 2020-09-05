const promise = require("bluebird");
const mysql = require("mysql");

promise.promisifyAll(require("mysql/lib/Connection").prototype);
promise.promisifyAll(require("mysql/lib/Pool").prototype);

let readAllUsers = async () => {
    try {
        const connection = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "mydb"
        });

        await connection.connectAsync();
        let sql = "SELECT * FROM users";
        let results = await connection.queryAsync(sql);
        console.log(results);

        await connection.endAsync();
        return results;
    } catch (err) {
        console.log(err);
    }

};
readAllUsers();