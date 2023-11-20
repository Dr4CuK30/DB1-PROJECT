const personService = require("../services/PersonService.js");

const createPerson = async (req, res) => {
  await personService.createPerson(req);
  res.setHeader("Content-Type", "application/json; charset=UTF-8");
  res.status(201).send({ message: "success", status: 201 });
};

module.exports = { createPerson };
