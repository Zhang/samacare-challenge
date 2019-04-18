const express = require('express');
const path = require('path');
const multer = require('multer');
const parser = require('body-parser');

const router = require('./server/routes');

const app = express();
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use('/', router);
app.use(express.static(path.resolve(__dirname, './dist')));
app.listen(3000, () => { console.log('express is listening on port 3000'); });
