# joi-postcode

Validate UK postcodes with Joi.

This is a regex based validation taken from the excellent [postcode.js](https://github.com/ideal-postcodes/postcode.js). Note that this will just check the format of the given string is correct, not that the postcode exists. See [note on postcode validation](https://github.com/ideal-postcodes/postcode.js/blob/master/README.md#note-on-postcode-validation).

## Usage

```js
var Joi = require('joi')
Joi.postcode = require('joi-postcode')

Joi.postcode().validate('WC2N 4HG', function (err) {
  console.log(err ? 'Invalid' : 'Valid')
})
```
