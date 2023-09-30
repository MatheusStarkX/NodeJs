const path = require('path');

const express = require('express');

//const rootDir = require('../Helper/path');
const adminData = require('./admin');

const router = express.Router();

// router.get('/', (req, res, next) => {
//     // console.log(adminData.products);
//     res.sendFile(path.join(rootDir, 'views', 'shop.html'));
//     // res.render('shop');
// });

router.get('/', (req, res, next) => {
    const products = adminData.products;
    res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    });
});
  

module.exports = router;