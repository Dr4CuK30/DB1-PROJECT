const oracleConnection = require("./db.js");

if (!oracleConnection.isConnected()) {
  oracleConnection.connect();
}

const createAddress = async (req) => {
  try {
    const {
      idTipoPersona,
      idTipoDocumento,
      nDocumento,
      nombre,
      apellido,
      contactos,
      direcciones,
    } = req.body;
    result = await oracleConnection.connection.execute(
      `
        SELECT TP.IDTIPOPERSONA, TP.DESCTIPOPERSONA
        FROM TIPOPERSONA TP
      `
    );
    return "success";
  } catch (err) {
    console.error(err);
    throw new Error("Error al obtener los datos de la base de datos");
  }
};
module.exports = {
  createAddress,
};
