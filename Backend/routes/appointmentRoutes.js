const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');

router.post('/createApp', appointmentController.createAppointment);
//router.get('/getApp', appointmentController.getAppointmentData);
router.get('/getApp', appointmentController.getAppointmentData);

router.put('/updateAPP/:id', appointmentController.updateAppointment);
router.delete('/deleteApp/:id', appointmentController.deleteAppointment);
router.get('/:id', appointmentController.generateReport);
module.exports = router;

