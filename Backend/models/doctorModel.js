const mongoose = require('mongoose');

const schemaData = mongoose.Schema(
  {
    name: String, // Name of the treatment
    specialization: String, // Specialization of the doctor providing the treatment
    schedule: String, // Schedule of the treatment (e.g., weekends)
    date: Date, // Date of the treatment
    fees: Number, // Fees for the treatment
    doctorId: { type: mongoose.Schema.Types.ObjectId, auto: true }, // Auto-generated doctor ID
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('doctors', schemaData);






           