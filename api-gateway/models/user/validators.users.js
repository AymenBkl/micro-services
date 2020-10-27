const mongoose = require('mongoose');

module.exports.validators = {
    emailValidator : (schema) => {
        schema.path('email').validate(async (value) => {
            const emailCount = await mongoose.models.User.countDocuments({email: value });
            return !emailCount;
          }, 'Email already exists');
    },

}