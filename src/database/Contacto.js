const oracleConnection = require('./db.js');

if (!oracleConnection.isConnected()) {
  oracleConnection.connect();
}

const createContact = async (
  contacto,
  idTipoDocumento,
  idTipoPersona,
  nDocumento
) => {
  try {
    const { idTipoContacto, descTipoContacto, descContacto } = contacto;
    let consecContacto = 1;
    const lastContacto = await oracleConnection.connection.execute(
      'SELECT MAX(CONSECCONTACTO) FROM ROOT.CONTACTO'
    );
    console.log(lastContacto);
    if (lastContacto.rows[0][0]) {
      consecContacto = lastContacto.rows[0][0] + 1;
    }
    result = await oracleConnection.connection.execute(
      `
      INSERT INTO ROOT.CONTACTO (CONSECCONTACTO, IDTIPOCONTACTO, DESCTIPOCONTACTO, IDTIPODOC, IDTIPOPERSONA, NDOCUMENTO,
        DESCCONTACTO)
      VALUES (:consecContacto, :idTipoContacto, :descTipoContacto, :idTipoDocumento, :idTipoPersona, :nDocumento, :descContacto)
      `,
      {
        consecContacto,
        idTipoContacto,
        descTipoContacto,
        idTipoDocumento,
        idTipoPersona,
        nDocumento,
        descContacto,
      }
    );
    await oracleConnection.connection.commit();
    return 'success';
  } catch (err) {
    console.error(err);
    throw new Error('Error al obtener los datos de la base de datos');
  }
};
module.exports = {
  createContact,
};
