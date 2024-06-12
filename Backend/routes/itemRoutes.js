const express = require('express');
const multer = require('multer');
const router = express.Router();
const itemController = require('../controllers/itemController');

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

router.post('/itemcreate', upload.single('image'), itemController.createItems);
router.get('/itemgetData', itemController.getItemData);
router.put('/itemupdate/:id', upload.single('image'), itemController.updateItem);
router.delete('/itemdelete/:id', itemController.deleteItem);
router.get('/:id', itemController.generateReport);
module.exports = router;

