const mongoose = require('mongoose');

module.exports.validators = {

    phoneValidator : (schema) => {
        schema.path('phoneNumber').validate(async (value) => {
            const phoneNumberCount = await mongoose.models.User.countDocuments({phoneNumber: value });
            return !phoneNumberCount;
          }, 'Phone already exists');
    },

}