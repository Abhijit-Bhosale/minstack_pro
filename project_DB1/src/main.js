const express = require("express");
const multer = require("multer");
const dbContext = require("./add_db");
const cors = require("cors");


const app = express();
app.use(express.urlencoded({ extended: true }));//parsing urlencoded data
app.use(express.json());//parsing the body::raw data::json input
app.use(cors());

const upload = multer({})

app.get("/", (req, res) => {

    res.send("hello")
});


app.post("/addrequest", async (req, res) => {
    try {
        const input = req.body;// parsing is required
        await dbContext.addUserRequest(input);
        res.json({ title: "i am post request" });
    } catch (err) {
        console.log(err.message);
    }
});

app.post("/getrequest", async (req, res) => {
    try {
        const input = req.body;// parsing is required
        var result = await dbContext.getUserRequest(input);
        res.json(result);
    } catch (err) {
        console.log(err.message);
    }
});

app.post("/registration", async (req, res) => {
    try {
        const input = req.body;// parsing is required
        var result = await dbContext.registration(input);
        console.log(result);
        res.json(result);
    } catch (err) {
        console.log(err.message);
    }
});

app.post("/login", async (req, res) => {
    try {
        const input = req.body;// parsing is required
        var result = await dbContext.login(input);
        console.log(result);
        res.json(result);
    } catch (err) {
        console.log(err.message);
    }
});


app.listen(3000);