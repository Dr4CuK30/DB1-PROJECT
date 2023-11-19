const express = require("express");
const router = express.Router();

const {
  getContactTypes,
  getDocumentTypes,
  getPersonTypes,
} = require("../controllers/TypesController.js");

router.get("/document-types", getLogIn).get("").get("");

module.exports = router;
