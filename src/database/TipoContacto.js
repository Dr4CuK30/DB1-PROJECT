const oracleConnection = require('./db.js');

if (!oracleConnection.isConnected()) {
  oracleConnection.connect();
}

const getContactTypes = async () => {
  try {
    result = await oracleConnection.connection.execute(
      `
        SELECT *
        FROM TIPOCONTACTO 
      `
    );
    return result.rows.map((tipo) => ({ id: tipo[0], description: tipo[1] }));
  } catch (err) {
    console.error(err);
    throw new Error('Error al obtener los datos de la base de datos');
  }
};
module.exports = {
  getContactTypes,
};
