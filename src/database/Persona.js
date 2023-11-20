const oracleConnection = require('./db.js');
const { createContact } = require('./Contacto.js');
const { createAddress } = require('./Direccion.js');

if (!oracleConnection.isConnected()) {
  oracleConnection.connect();
}

const createPerson = async (req) => {
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
        INSERT INTO ROOT.PERSONA (IDTIPODOC, IDTIPOPERSONA, NDOCUMENTO, NOMBRE, APELLIDO)
        VALUES (:idTipoDocumento, :idTipoPersona, :nDocumento, :nombre, :apellido)
      `,
      {
        idTipoPersona,
        idTipoDocumento,
        nDocumento,
        nombre,
        apellido,
      }
    );
    await oracleConnection.connection.commit();
    await Promise.all(
      contactos.map(async (contacto) => {
        await createContact(
          contacto,
          idTipoDocumento,
          idTipoPersona,
          nDocumento
        );
      })
    );
    await Promise.all(
      direcciones.map(async (direccion) => await createContact())
    );
    return 'success';
  } catch (err) {
    console.error(err);
    throw new Error('Error al obtener los datos de la base de datos');
  }
};
module.exports = {
  createPerson,
};
