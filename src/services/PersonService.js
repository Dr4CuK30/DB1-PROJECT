const personDb = require("../database/Persona.js");

const createPerson = async (req) => {
  const result = await personDb.createPerson(req);
  return result;
};

module.exports = {
  createPerson,
};
