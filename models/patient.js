var mongoose = require('mongoose');

var PatientSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    report_id: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'report',
    },
  },
  {
    timestamps: true,
  }
);

var patient = mongoose.model('patient', PatientSchema);

module.exports = patient;
