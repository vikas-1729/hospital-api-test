var express = require('express');

var router = express.Router();

var controller = require('../controllers/doctorController');
//routes
//doctor/create --> POST Create
//doctor/:id --> GET Read
//doctor --> GET Read
//doctor/update/:id  _> PUT UPDATE
//doctor/delete/:id  -> DELTE DELETE


router.get('/',controller.doctorReadAll);

router.get('/:id',controller.doctorRead);

router.post('/create',controller.doctorCreate);

router.put('/update/:id',controller.doctorUpdate);

router.delete('/delete/:id',controller.doctorDelete);


module.exports = router;



