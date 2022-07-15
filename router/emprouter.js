var express = require('express');
var router = express.Router();
var empcontroller = require('../controller/empcontroller');

router.get('/queryall',empcontroller.queryall);
router.get('/queryone/:empno',empcontroller.queryone);
router.post('/insert',empcontroller.queryadd);
router.get('/delete',empcontroller.querydel);
router.get('/update',empcontroller.queryupdate);
router.post('/update1',empcontroller.queryupdate1);

module.exports = router;


