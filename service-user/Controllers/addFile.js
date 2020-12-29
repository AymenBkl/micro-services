const request = require('../Request/request').request;


const response = require('../Handler/HandlerUser/response.controller');

const requestProduct = require('../Request/requestAddMainProducts').request;

var xlsxtojson = require("xlsx-to-json");
var xlstojson = require("xls-to-json");
var xlx = require('xlsx');
var fs = require('fs');
var xlsx = require('node-xlsx');

module.exports = {
    addFile: (req, res, next) => {
        request(req, res, next)
            .then(result => {
                console.log(result)
                if (result && result.status == 200) {
                    readFile(result.msg, res)
                        .then(newObj => {
                            console.log(newObj)
                            req.body.newObj = newObj;
                            requestProduct(req, res, next,newObj)
                                .then(result => {
                                    console.log("result",result);
                                    if (result && result.status == 200) {
                                        response.response("success", res, "Main Product Added", 200, null);
                                    }
                                    else {
                                        response.response("error", res, result.msg, 404, null);

                                    }
                                })
                                .catch(err => {
                                    console.log("ee",err);
                                    response.response("error", res, err, 500, null);
                                })
                        })
                }
                else {
                    response.response("error", res, result.msg, 404, null);
                }
            })
            .catch(err => {
                response.response("error", res, err, 500, null);
            })

    }
}


function readFile(fileURL, res) {
    return new Promise((resolve, reject) => {
        const host = "http://localhost:8080/";
        var XLSX = require('xlsx')
        var workbook = XLSX.readFile(__dirname + '\\xyz.xlsx');
        var sheet_name_list = workbook.SheetNames;
        var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
        xlData.splice(0, 1);
        xlData.splice(0, 1);
        xlData.splice(0, 1);
        const newKeys = ['company_name', 'name', 'quantity', 'packing', 'hsnocde', 'cgst', 'sgst', 'igst'];
        const renameObj = renameKeys(xlData, newKeys);
        resolve(renameObj);
    })
}
function renameKeys(arrayObject, newKeys, index = false) {
    let newArray = [];
    arrayObject.forEach((obj, item) => {
        if ('COMPANY NAME' in Object.keys(obj)) {
            const keyValues = Object.keys(obj).map((key, i) => {
                return { [newKeys[i] || key]: obj[key] }
            });
            let id = (index) ? { 'ID': item } : {};
            newArray.push(Object.assign(id, ...keyValues));
        }
        else {
            const keyValues = Object.keys(obj).map((key, i) => {
                return { [newKeys[i+1] || key]: obj[key] }
            });
            let id = (index) ? { 'ID': item } : {};
            newArray.push(Object.assign(id, ...keyValues));
        }



    });
    return newArray;
}