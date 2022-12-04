const express = require('express');
const router = express.Router();
const NewController = require('../app/controllers/NewsController');

router.get('/:slug',NewController.slug)
router.get('/', NewController.index)

module.exports = router;