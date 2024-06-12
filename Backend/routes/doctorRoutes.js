const express = require('express');
//const multer = require('multer');
const router = express.Router();
const doctorController = require('../controllers/doctorController');

router.post('/createDoc', doctorController.createDoctor);
router.get('/getDoc', doctorController.getDoctorData);
router.put('/updateDoc/:id', doctorController.updateDoctor);
router.delete('/deleteDoc/:id', doctorController.deleteDoctor);





module.exports = router;
