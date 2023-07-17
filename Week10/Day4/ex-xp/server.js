const express = require("express");
const cors = require("cors");
const p4ssw0rd = require('p4ssw0rd');

const app = express();

// database setup
const knex = require("knex");

const db = knex({
    client: "pg",
    connection: {
        host: "localhost",
        port: "5432",
        user: "postgres",
        password: "123",
        database: "knex_registration_ex(w10d4)",
    },
});

app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.raw());

// Registration
app.post("/registration", async (req, res) => {
    const userData = req.body;

    try {
        const users = await db("users").where({ email: userData.email });

        if (users.length) {
            throw new Error('Email already exists')
        }

        userData.password = p4ssw0rd.hash(userData.password);
        const registeredUsers = await db("users").returning(["id", "firstname", "lastname"]).insert(userData);
        res.send(registeredUsers);
    } catch (err) {
        res.status(500).json([{ error: err.message}])
    }
});

// Login

app.post("/login", async (req, res) => {
    const userData = req.body;
    console.log('got user data:', userData)
    const today = new Date()

    try {

        const loginedUser = await db("logins").returning(["username"]).insert(userData);
        const result = await db("users").select('password').where({ username: userData.username});

        if (! result.length) {
            throw new Error('No such user')
        }

        const hash = result[0].password

        if (! p4ssw0rd.check(userData.password, hash)) {
            throw new Error('Wrong password')
        }

        await db("users").where({ username: userData.username}).update({last_login: today})

        res.send(loginedUser);
    } catch (err) {
        res.status(500).json([{ error: err.message}])
        console.log(err)
    }
});


app.listen(3000);
