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
        console.log(req.file)
        if (req.file) {
            readFile(req.file.filename, res)
            .then(newObj => {
                req.body.newObj = newObj;
                requestProduct(req, res, next, newObj)
                    .then(result => {
                        if (result && result.status == 200) {
                            response.response("success", res, "Main Product Added", 200, null);
                        }
                        else {
                            response.response("error", res, result.msg, 404, null);

                        }
                    })
                    .catch(err => {
                        console.log("ee", err);
                        response.response("error", res, err, 500, null);
                    })
            })
        } else {
            response.response("error", res, "FILE NOT PRESENT", 500, null);
        }
        
    }
}


function readfile(fileURL, res) {
    return new Promise((resolve, reject) => {
        const host = "http://localhost:8080/";
        var XLSX = require('xlsx')
        var workbook = XLSX.readFile(__dirname + '/xyz.xlsx');
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
function addKeys(obj) {
    obj.splice(0, 1);
    obj.splice(0, 1);
    obj.splice(0, 1);
    obj.splice(0, 1);
    obj.splice(0, 1);
    let newArray = [];
    obj.map((item, index) => {
        newArray.push({
            'company_name': item[0],
            'name': item[1],
            'quantity': item[2],
            'packing': item[3],
            'hsnocde': item[4],
            'cgst': item[5],
            'sgst': item[6],
            'igst': item[7],
        })
    })
    return newArray;
}

function readFile(fileURL, res) {
    return new Promise((resolve, reject) => {
        var xlsx = require('node-xlsx');
        var path = require('path');
        console.log(process.mainModule.path)
        var obj = xlsx.parse(process.mainModule.path + '/uploads/' + fileURL);
        const newobj = addKeys(obj[0]['data'])
        console.log(newobj)
        resolve(newobj)
    });
}