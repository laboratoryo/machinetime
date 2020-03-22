const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.name =  !isEmpty(data.name) ? data.name: '';

  if (!Validator.isLength(data.firstName, { min: 2, max: 30 })) {
	errors.firstName = 'Name must be between 2 and 30 characters';
  }

  if (Validator.isEmpty(data.name)) {
	errors.name = 'Name field is required';
  }

  return {
	errors,
	isValid: isEmpty(errors)
  }
}