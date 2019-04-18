const fs = require('fs');
const path = require('path');
const multer = require('multer');
const router = require('express').Router();

const { Markup } = require('../db/models.js');

// I am opting to use the date for a filename
// A better implementation would likely use a hash
const storage = multer.diskStorage({
  destination: (_req, _file, callback) => {
    callback(null, 'dist/uploads/');
  },
  filename: (_req, file, callback) => {
    callback(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

router
  .route('/forms')
  .get((_req, res) => {
    fs.readdir('./dist/uploads', (err, files) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.send(files);
      }
    });
  })
  .post(upload.single('medical-form'), (req, res) => {
    res.redirect('/');
  });
router
  .route('/save')
  .get((_req, res) => {
    Markup.find({}, (err, markups) => {
      if (err) {
        console.log(err);
      } else {
        console.log(markups);
        res.status(200).send(markups);
      }
    });
  })
  .post((req, res) => {
    const {
      fileName,
      saveName,
      markupBoxes,
    } = req.body;
    new Markup({
      fileName,
      saveName,
      markupBoxes,
    }).save((err, newMarkup) => {
      if (err) {
        console.log(err);
      } else {
        res.status(201).send(newMarkup);
      }
    });
  });

module.exports = router;
