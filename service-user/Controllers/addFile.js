const request = require('../Request/request').request;


const response = require('../Handler/HandlerUser/response.controller');

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
                    readFile(result.msg,res)
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


function readFile(fileURL,res) {
    const host = "http://localhost:8080/";



var XLSX = require('xlsx')
var workbook = XLSX.readFile(__dirname + '\\xyz.xlsx');
var sheet_name_list = workbook.SheetNames;
var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
console.log(xlData);
}