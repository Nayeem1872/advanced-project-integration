const express = require('express');

const router = express.Router();

const data = require('../controller/data.js');
const userController = require('../controller/userController.js');


router.use(express.json());


router.post ('/add',data)
router.get ('/child',userController().getChild)
// router.post ('/add1',data)

module.exports = router;