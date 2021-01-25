const mongoose = require('mongoose');

module.exports.validators = {
    emailValidator : (schema) => {
        schema.path('email').validate(async (value) => {
            const emailCount = await mongoose.models.User.countDocuments({email: value });
            return !emailCount;
          }, 'Email already exists');
    },

    phoneValidator : (schema) => {
        schema.path('phoneNumber').validate(async (value) => {
            const phoneNumberCount = await mongoose.models.User.countDocuments({phoneNumber: value });
            return !phoneNumberCount;
          }, 'Phone already exists');
    },

}