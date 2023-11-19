const oracleConnection = require("./db.js");

if (!oracleConnection.isConnected()) {
  oracleConnection.connect();
}

const getDocumentTypes = async () => {
  try {
    result = await oracleConnection.connection.execute(
      `
        SELECT TD.IDTIPODOC, TD.DESCTIPODOC
        FROM TIPODOC TD
      `
    );
    return result.rows.map((tipo) => ({ id: tipo[0], description: tipo[1] }));
  } catch (err) {
    console.error(err);
    throw new Error("Error al obtener los datos de la base de datos");
  }
};
module.exports = {
  getDocumentTypes,
};
