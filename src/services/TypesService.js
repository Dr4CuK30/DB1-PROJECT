const { getContactTypes } = require("../database/TipoContacto.js");
const { getDocumentTypes } = require("../database/TipoDocumento.js");
const { getPersonTypes } = require("../database/TipoPersona.js");

const getDocumentTypes = async () => {
  const result = await getDocumentTypes();
  return result;
};
const getContactTypes = async () => {
  const result = await getContactTypes();
  return result;
};
const getPersonTypes = async () => {
  const result = await getPersonTypes();
  return result;
};

module.exports = {
  getContactTypes,
  getDocumentTypes,
  getPersonTypes,
};
