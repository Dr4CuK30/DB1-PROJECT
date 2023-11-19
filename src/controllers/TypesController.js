const typesService = require('../services/TypesService.js');

const getDocumentTypes = async (req, res) => {
  const result = await typesService.getDocumentTypes(req);
  res.setHeader('Content-Type', 'application/json; charset=UTF-8');
  res.status(200).send(result);
};
const getContactTypes = async (req, res) => {
  const result = await typesService.getContactTypes(req);
  res.setHeader('Content-Type', 'application/json; charset=UTF-8');
  res.status(200).send(result);
};
const getPersonTypes = async (req, res) => {
  const result = await typesService.getPersonTypes(req);
  res.setHeader('Content-Type', 'application/json; charset=UTF-8');
  res.status(200).send(result);
};

module.exports = { getContactTypes, getDocumentTypes, getPersonTypes };
