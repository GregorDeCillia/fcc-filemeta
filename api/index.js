var express = require('express');
var cors = require('cors');
const multer  = require('multer');
const upload = multer();
var app = express();

app.use(cors({ origin: 'https://www.freecodecamp.org' }));
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', (_req, res) =>
  res.sendFile(process.cwd() + '/index.html'));

app.get('/style.css', (_req, res) =>
  res.sendFile(process.cwd() + '/style.css'));

app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  res.json({
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size
  })
})

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;