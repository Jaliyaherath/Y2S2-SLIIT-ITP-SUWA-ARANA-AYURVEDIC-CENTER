const express = require('express');
const multer = require('multer');
const router = express.Router();
const feedbackController = require('../controllers/feedbackController');

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads');
//   },
//   filename: (req, file, cb) => {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
//     const imageFileName = uniqueSuffix + '-' + file.originalname;
//     cb(null, imageFileName);
//   },
// });

//const upload = multer({ storage: storage });

router.post('/createfeedback', feedbackController.createfeedback);
router.get('/getfeedback', feedbackController.getfeedbackData);
//router.put('/update/:id', upload.single('image'), treatmentController.updateTreatment);
router.delete('/deletefeedback/:id', feedbackController.deletefeedback);
router.get('/:id', feedbackController.generateReport);
module.exports = router;

