const express = require("express");
const router = express.Router();

const {
  getContactTypes,
  getDocumentTypes,
  getPersonTypes,
} = require("../controllers/TypesController.js");

router.get("/document-types", getDocumentTypes).get("").get("");
router.get("/person-types", getPersonTypes).get("").get("");
router.get("/contact-types", getContactTypes).get("").get("");

module.exports = router;
