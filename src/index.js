const express = require('express');
const cors = require('cors');
const app = express();

//settings
const port = process.env.PORT || 5000;
app.set('port', port);

//middlewares
app.use(express.json()); // for parsing application/json

// Configurar CORS
app.use(cors());

//routes
app.use(require('./routes/TypesRoutes.js'));
app.use(require('./routes/PersonRoutes.js'));
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
