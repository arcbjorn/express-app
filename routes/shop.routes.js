const path = require('path');

const express = require('express');

const adminData = require('./admin.routes');

const router = express.Router();

router.get('/', (req, res, next) => {
  const { products } = adminData;
  res.render('shop', {
    products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
});

module.exports = router;
