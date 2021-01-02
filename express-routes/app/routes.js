const express = require('express');
const router = new express.Router;
const Controllers = require('./Controllers/Controllers')

router.get('/',Controllers.home)
router.get('/about',Controllers.about)
router.get('/contact',Controllers.contact)

module.exports = router;
