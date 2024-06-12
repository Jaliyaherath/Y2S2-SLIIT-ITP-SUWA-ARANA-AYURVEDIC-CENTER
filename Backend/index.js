
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan')
const app=express();

app.use(morgan('tiny'))


app.use(cors());
app.use(express.json());
const dotenv = require('dotenv');

dotenv.config();
const MONGODB_URI = (process.env.DB_URI)

app.use('/uploads', express.static('uploads'));

const PORT = process.env.PORT || 8090;

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to DB');

    const itemRoutes = require('./routes/itemRoutes');
    app.use('/', itemRoutes);

    const treatmentRoutes = require('./routes/treatmentRoutes');
    app.use('/api/treatments', treatmentRoutes);


   


    const doctorRoutes = require('./routes/doctorRoutes');
    app.use('/api/doctors', doctorRoutes);

    
    const PackageRoutes = require('./routes/PackageRoutes');
    app.use('/api/Package', PackageRoutes);


    const paymentRoutes = require('./routes/paymentRoutes');
    app.use('/api/payment', paymentRoutes);

    const appointmentRoutes = require('./routes/appointmentRoutes');
    app.use('/api/Appoiment', appointmentRoutes);

    const feedbackroutes = require('./routes/feedbackroutes');
    app.use('/api/feedback', feedbackroutes);

    app.listen(PORT, () => console.log('Server running on port ' + PORT));
  })
  .catch((error) => console.log(error));