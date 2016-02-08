var Joi = require('joi')
var regex = /^[a-z]{1,2}\d[a-z\d]?\s*\d[a-z]{2}$/i

module.exports = function () {
  return Joi.string().regex(regex).description('postcode')
}
