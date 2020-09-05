const express = require("express");
const dbt = require("./add_db.js");
const app = express();
const cors = require("cors");
app.use(cors());

app.get("/user", async (req, res) => {

    await dbt.addInUsers(req.query);
    res.json("hello");
    console.log(req.query);

});
app.listen(3000);