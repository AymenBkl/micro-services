const category = require('../Models/category');

const response = require('../Handler/HandlerPrescription/response.controller');

const prescription = require('../Models/prescription');

const comment = require('../Models/commet');

module.exports.approvePrescription = (res, prescriptionId,commentId, query, options) => {

    prescription.findByIdAndUpdate(prescriptionId, query, options)
        .then(prescription => {
            if (prescription) {
                comment.findByIdAndUpdate(commentId, query, options)
                    .then(comment => {
                        if (comment) {
                            response.response("success", res, "PRESCRIPTION UPDATED", 200);
                        }
                        else {
                            response.response("error", res, "undefined", 404, null);
                        }
                    })
                    .catch(err => {
                        response.response("error", res, err, 500, null);

                    })
            }
            else {
                response.response("error", res, "undefined", 404, null);
            }
        })
        .catch(err => {
            response.response("error", res, err, 500, null);

        })
}