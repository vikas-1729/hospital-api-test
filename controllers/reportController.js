const doctorModule = require('../models/doctor');
const patientModule = require('../models/patient');
const reportModule = require('../models/reports');
//
module.exports.createReport = async function (req, res) {
  console.log('req body', req.body);
  const { name, doctor_id, patient_id, status } = req.body;
  //doctor _id

  try {
    var tempRes = await doctorModule.findById(doctor_id);
    if (!tempRes) {
      return res.status(402).json({
        success: false,
        message: 'Doctor Not Found',
      });
    }

    var tempRes = await patientModule.findById(patient_id);
    if (!tempRes) {
      return res.status(402).json({
        success: false,
        message: 'Patient Not Found',
      });
    }

    if (status != 'positive' && status != 'negative') {
      return res.status(402).json({
        success: false,
        message: 'status is wrong',
      });
    }

    var tempRes = await reportModule.create({
      doctor_id: doctor_id,
      patient_id: patient_id,
      status: status,
      name: name,
    });

    return res.status(200).json({
      success: true,
      message: 'report created successfuly',
    });
  } catch (error) {
    console.log('er', error);
    return res.status(500).json({
      success: false,
      message: error.getMessage,
    });
  }
};

module.exports.getReport = async function getReport(req, res) {
  const reportId = req.params.id;

  try {
    let data = await reportModule
      .findById(reportId)
      .populate('doctor_id', 'name')
      .populate('patient_id');
    return res.status(200).json({
      success: true,
      message: 'report created successfuly',
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.getMessage,
    });
  }
};
