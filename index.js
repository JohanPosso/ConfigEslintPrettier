const express = require('express');

const app = express();

const port = 3000;

app.get('', (req, res) => {
  res.send('Bienvenidos uso de Eslint & Prettier');
});
app.listen(port, () => {
  console.log(`Server Running in port ${port}`);
});
