const express = require("express");
const cors = require("cors");
const app = express();

//settings
const port = process.env.PORT || 5000;
app.set("port", port);
global.fecha = global.fecha
  ? global.fecha
  : (() => {
      fecha = new Date(Date.now());

      fecha = new Date(fecha);
      const anio = fecha.getFullYear();
      const mes = (fecha.getMonth() + 1).toString().padStart(2, "0");
      const dia = fecha.getDate().toString().padStart(2, "0");
      const hora = fecha.getHours().toString().padStart(2, "0");
      const minuto = fecha.getMinutes().toString().padStart(2, "0");
      const segundo = fecha.getSeconds().toString().padStart(2, "0");

      // Formatear la fecha y hora en el formato deseado
      fecha = `${anio}-${mes}-${dia} ${hora}:${minuto}:${segundo}`;
      return fecha;
    })();

//middlewares
app.use(express.json()); // for parsing application/json

// Configurar CORS
app.use(cors());

//routes
app.use(require("./routes/TypesRoutes.js"));

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
