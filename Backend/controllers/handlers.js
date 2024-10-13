const User = require("../model/schema");

const addUser = async (req, res) => {
  const { title, body } = req.body;

  const userInfo = {
    title,
    body,
  };

  const userEntry = new User(userInfo);
  userEntry
    .save()
    .then(() => {
      res.status(200).json({ message: "User added successfully" });
    })
    .catch((err) => {
      res.status(400).json({ message: "Failed to add user" });
    });
};

module.exports = { addUser };