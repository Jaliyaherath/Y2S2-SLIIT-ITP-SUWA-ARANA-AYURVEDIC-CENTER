const express = require('express');
const router = express.Router();
const packageController = require('../controllers/PackageController');

// Define your routes
router.post("/add-package-doctor", packageController.addPackageAndDoctor);
//router.get("/get-package-doctor", packageController.getPackageAndDoctor);

// Handle GET requests for the "/add-package-doctor" endpoint
router.get("/get-package-doctor", packageController.getPackageAndDoctor);
router.put("/verify/:id", packageController.packageVerify);

module.exports = router;
