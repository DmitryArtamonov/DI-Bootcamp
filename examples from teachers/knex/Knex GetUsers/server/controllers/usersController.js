//FUNCTION AFTER APP.GET(/SOMETHING=> SEND RESPONSE TO CLIENT =>SEND HIM BACK DATA.. IF LOGIN, SUCCESSFULL OR UNSUCCESSFUL...)

const { getAllUsers } = require("../models/users");

const getUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server Error" });
  }
};

module.exports = {
  getUsers,
};
