const express = require("express");
const dotenv = require("dotenv");
// import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.listen(process.env.PORT, () => {
    console.log(`run on port ${process.env.PORT}`)
})