const typesContacto = require('../database/TipoContacto.js');
const typesDocumento = require('../database/TipoDocumento.js');
const typesPersona = require('../database/TipoPersona.js');

const getDocumentTypes = async () => {
  const result = await typesDocumento.getDocumentTypes();
  return result;
};
const getContactTypes = async () => {
  const result = await typesContacto.getContactTypes();
  return result;
};
const getPersonTypes = async () => {
  const result = await typesPersona.getPersonTypes();
  return result;
};

module.exports = {
  getContactTypes,
  getDocumentTypes,
  getPersonTypes,
};
