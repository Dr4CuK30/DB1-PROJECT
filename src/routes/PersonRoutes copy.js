const express = require("express");
const router = express.Router();

const { createPerson } = require("../controllers/PersonController.js");

router.post("/person", createPerson);

module.exports = router;
