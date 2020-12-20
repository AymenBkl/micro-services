const mongoose = require('mongoose');

module.exports.validators = {
    codeValidator : (schema) => {
        schema.path('code').validate(async (value) => {
            const codeCount = await mongoose.models.User.countDocuments({code: value });
            return !codeCount;
          }, 'Code already exists');
    },

    userValidator : (schema) => {
        schema.path('owner').validate(async (value) => {
            const ownerCount = await mongoose.models.User.countDocuments({owner: value });
            return !ownerCount;
          }, 'Owner already exists');
    },

}

