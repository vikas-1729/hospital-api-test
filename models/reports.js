var mongoose = require('mongoose');

var ReportsSchema = new mongoose.Schema(
  {
    name: String,
    doctor_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'doctor',
    },
    patient_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'patient',
    },
    status: {
      type: String,
      enum: ['positive', 'negative'],
    },
  },
  {
    timestamps: true,
  }
);

var report = mongoose.model('report', ReportsSchema);

module.exports = report;
