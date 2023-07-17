//Actual Query to database=> return the response you want

const db = require("../config/Database");

const getAllUsers = async () => {
  const response = await db.select("*").from("users");
  return response;
};

//Register user=>(PASS DATA FROM FRONT END IN A POST REQUEST)=> INSERT INTO DATABASE => GET RESPONSE BACK (SUCCESSFUL, OR MAYBE USER ALREADY EXISTS IN DB?)

module.exports = {
  getAllUsers,
};
