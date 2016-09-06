var Joi = require('joi')
var regex = /^[a-z]{1,2}\d[a-z\d]?\s*\d[a-z]{2}$/i

module.exports = {
  name: 'postcode',
  base: Joi.string().regex(regex).description('postcode')
}
