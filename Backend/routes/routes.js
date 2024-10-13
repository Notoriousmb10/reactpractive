const express = require("express");
const { addUser } = require("../controllers/handlers");
const router = express.Router();


router.post('/addUser', addUser)
// router.get('/getUser', getUser)

module.exports = router;