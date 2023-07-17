//Whats the actual route that the client makes a fetch request to... export and use on server.js

const express = require("express");
const usersController = require("../controllers/usersController");

const router = express.Router();

router.get("/getUsers", usersController.getUsers);

module.exports = router;
