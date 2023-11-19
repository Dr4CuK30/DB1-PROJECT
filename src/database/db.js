const oracledb = require('oracledb');
oracledb.fetchAsString = [oracledb.CLOB]; // Para recuperar CLOB como cadena en lugar de objeto

class Database {
  constructor() {
    this.connection = null;
  }

  async connect() {
    const connectionConfig = {
      user: 'BD12023',
      password: 'BD12023',
      connectString: 'localhost/XE',
      charset: 'UTF8'
    }
    try {
      this.connection = await oracledb.getConnection(connectionConfig);
      console.log('Conexión establecida correctamente');
    } catch (error) {
      console.error('Error al establecer la conexión:', error);
    }
  }

  isConnected() {
    return this.connection !== null;
  }
}
const db = new Database();

module.exports = db;

