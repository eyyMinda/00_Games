const fs = require('fs');
const express = require('express');
const app = express();

app.use(express.static(__dirname));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

fs.readdirSync(__dirname).forEach(file => {
  if (file !== 'node_modules' && fs.lstatSync(file).isDirectory()) {
    app.use(`/${file}`, express.static(`${__dirname}/${file}`));
    app.get(`/${file}`, (req, res) => {
      res.sendFile(`${__dirname}/${file}/index.html`);
    });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});