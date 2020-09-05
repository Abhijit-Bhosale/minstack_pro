const Promise = require("bluebird");
const mysql = require("mysql");


Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let registration = async (user) => {
    try {
        const connection = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "project"
        });

        await connection.connectAsync();

        let sql = "INSERT INTO users(UNAME,UMOBILE,UEMAIL,UPASSWORD)values(?,?,?,?)";

        let results = await connection.queryAsync(sql, [user.username, user.usermobile, user.email, user.password]);
        console.log(results);

        let sql1 = "SELECT ID,UNAME,UMOBILE,UEMAIL FROM USERS WHERE UEMAIL=? AND UPASSWORD=?";

        let results1 = await connection.queryAsync(sql1, [user.email, user.password]);
        console.log(results1);
        await connection.endAsync();
        return results1;


    } catch (err) {
        console.log(err);
    }
};

let login = async (user) => {
    try {
        const connection = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "project"
        });

        await connection.connectAsync();
        let sql = "SELECT ID,UNAME,UMOBILE,UEMAIL FROM USERS WHERE UEMAIL=? AND UPASSWORD=?";
        let results = await connection.queryAsync(sql, [user.email, user.password]);
        console.log(results);
        await connection.endAsync();
        return results;


    } catch (err) {
        console.log(err);
    }
};

let addUserRequest = async (user) => {
    try {
        const connection = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "project"
        });

        await connection.connectAsync();

        let sql = "INSERT INTO userrequests(USERID,UFROM,UTO,STATUS,REQDATE)values(?,?,?,?,?)";

        let results = await connection.queryAsync(sql, [user.userID, user.moveFrom, user.moveTo, 1, new Date()]);
        console.log(results);
        await connection.endAsync();
        // return results;


    } catch (err) {
        console.log(err);
    }
};

let getUserRequest = async (user) => {
    try {
        const connection = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "project"
        });

        await connection.connectAsync();
        let sql = "SELECT * FROM userrequests WHERE USERID=?";
        let results = await connection.queryAsync(sql, [user.ID]);
        console.log(results);
        await connection.endAsync();
        return results;


    } catch (err) {
        console.log(err);
    }
};

module.exports.registration = registration;
module.exports.login = login;
module.exports.addUserRequest = addUserRequest;
module.exports.getUserRequest = getUserRequest;

