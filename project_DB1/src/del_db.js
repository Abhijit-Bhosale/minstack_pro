const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let delInUsers = async () => {
    try {
        const connection = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "mydb"
        });

        await connection.ConnectAsync();

        let sql = "DELETE FROM users WHERE ID=?";
        let results = await connection.queryAsync(sql, [3]);

        await connection.endAsync();
        return results;
    } catch (err) {
        console.log(err);
    }
};
delInUsers();
