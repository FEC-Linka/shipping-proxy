const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 7199;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
})

app.get('/:productId', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
})

app.listen(port, () => {
  console.log(`Etsy Proxy listening on port ${port}`);
})