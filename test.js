const test = require('tape')
const Joi = require('joi').extend(require('./'))

test('Should validate a valid postcode', (t) => {
  t.plan(1)
  const result = Joi.postcode().validate('WC2N 4HG')
  t.ifError(result.error, 'No error validating valid postcode')
  t.end()
})

test('Should validate an invalid postcode', (t) => {
  t.plan(1)
  const result = Joi.postcode().validate('Not a postcode')
  t.ok(result.error, 'Expected error validating invalid postcode')
  t.end()
})
