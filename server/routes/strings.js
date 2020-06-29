const express = require('express');
const router = new express.Router();

const strData = ['String 1', 'String 2', 'String 3', 'String 4'];

router.get('/', (req, res, next) => {
  try {
    return res.json(strData);
  } catch (err) {
    return next(err);
  }
});

router.post('/', (req, res, next) => {
  try {
    const { inputString } = req.body;
    console.log(`from server`, inputString);
    if (!inputString) throw new Error('Please submit a string.');

    strData.unshift(inputString);
    return res.json(strData[0]);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
