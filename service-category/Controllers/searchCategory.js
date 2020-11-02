const category = require('../Models/category');

const response = require('../Handler/HandlerCategory/response.controller');

module.exports.searchCategory = (req,res) =>{
    console.log(req.body.categoriesId);
    category.find({
        $or : req.body.categoriesId
    })
        .then(categories => {
            if (categories && categories.length != 0){
                filterCategories(categories);
                response.response("success",res,"Categories Found",200,categories);
            }
            else {
                response.response("error",res,"undefined",404,null);
            }
        } )
        .catch(err => {
            response.response("error",res,err,500,null);
        })
}

function filterCategories(categories){
    let pharmaciesId = {};
    categories.forEach(category => {
        if (pharmaciesId[category.category]){
        }
        else {
            pharmaciesId[category.category] = [];
        }
        pharmaciesId[category.category].push(category);
    });

    console.log(pharmaciesId);
    
}