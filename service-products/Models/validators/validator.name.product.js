const mongoose = require('mongoose');

module.exports.validators = {
    productNameValidator : (schema) => {
        schema.path('name').validate(async (value) => {
            const nameCount = await mongoose.models.mainproduct.countDocuments({name: value });
            return !nameCount;
          }, 'Product Already Exists');
    },

    userValidator : (schema) => {
        schema.path('owner').validate(async (value) => {
            const ownerCount = await mongoose.models.mainproduct.countDocuments({owner: value });
            return !ownerCount;
          }, 'Owner already exists');
    },

}

