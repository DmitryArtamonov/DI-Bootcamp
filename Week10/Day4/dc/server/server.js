const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const fs = require("fs");

const app = express();

dotenv.config();
const PORT = process.env.PORT;
let users

fs.readFile('users.json', "utf8", (err,data) =>{
    users = JSON.parse(data)
})

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.raw());

// Registration
app.post("/registration", async (req, res) => {
    console.log('registration request')
    const userData = req.body;
    const usernames = await users.map((item) => item.username);
    
    if (usernames.includes(userData.username)){
        res.status(500).json([{ error: "user already exists"}])
    } else {
        users.push(userData)
        fs.writeFile('users.json', JSON.stringify(users), "utf8", () =>{
        })
        res.status(200).json(userData)
    }

});

// Login

app.post("/login", async (req, res) => {
    const userData = req.body;
    console.log('login request:', userData)
    const user = await users.filter((item) =>
        item.username === userData.username && item.password === userData.password);

    if (user.length){
        res.status(200).json(userData)
    } else {
        res.status(500).json([{ error: "wrong username or password"}])
    }
});


app.listen(PORT, () => console.log(`running server on port ${PORT}`));
