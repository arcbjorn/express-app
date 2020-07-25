const path = require('path');

const express = require('express');

const adminData = require('./admin.routes');

const router = express.Router();

router.get('/', (req, res, next) => {
  const { products } = adminData;
  res.render('shop', { products, pageTitle: 'Shop', path: '/' });
});

module.exports = router;
