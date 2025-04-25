import { Validator } from './validators/validator';

const validator = new Validator();

console.log(validator.validateUsername('username'));
console.log(validator.validateUsername('13username'));
