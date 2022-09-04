var express = require('express');

var router = express.Router();

var controller = require('../controllers/reportController');

// router.get('/',controller.doctorReadAll);

router.get('/:id', controller.getReport);

router.post('/create', controller.createReport);

// router.put('/update/:id',controller.doctorUpdate);

// router.delete('/delete/:id',controller.doctorDelete);

module.exports = router;
