const express = require('express');
const multer = require('multer');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const imageFileName = uniqueSuffix + '-' + file.originalname;
    cb(null, imageFileName);
  },
});

const upload = multer({ storage: storage });

router.post('/createPay', upload.single('image'), paymentController.createPayment);
router.get('/getPay', paymentController.getPaymentData);
router.put('/updatePay/:id', upload.single('image'), paymentController.updatePayment);
router.delete('/deletePay/:id', paymentController.deletePayment);
router.get('/:id', paymentController.generateReport);
module.exports = router;

