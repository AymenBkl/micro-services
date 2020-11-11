const CircuitBreaker = require('opossum');

const response = require('../Handler/HandlerCategory/response.controller');


const options = {
  timeout: 3000, 
  errorThresholdPercentage: 50, // When 50% of requests fail, trip the circuit
  resetTimeout: 30000 // After 30 seconds, try again.
};

module.exports.handleBreak =  function handleBreak(callbackFunction){
    const breaker = new CircuitBreaker(callbackFunction, options);

    breaker.fire()
      .then((result) => {
          console.log(result)
          response.response(result.type,result.res,result.msg,result.status,result.category)
      })
      .catch((result) => {
        response.response(result.type,result.res,result.msg,result.status,result.category)
    });
}


