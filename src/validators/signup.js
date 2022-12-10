/* eslint-disable linebreak-style */
/* eslint-disable newline-per-chained-call */
import Joi from 'joi';

const validateUserSignup = {

  validation(newUser) {
    const newUserSchema = {
      firstName: Joi.string().min(3).trim().required(),
      lastName: Joi.string().min(3).trim().required(),
      email: Joi.string().email({ minDomainAtoms: 2 }).trim().required(),
      password: Joi.string().min(6).max(12).trim().required(),
      address: Joi.string().trim().required(),
      bio: Joi.string().min(6).max(50).required(),
      occupation: Joi.string().min(6).max(50).required(),
      expertise: Joi.string().min(6).max(60).required(),
    };
    return Joi.validate(newUser, newUserSchema);
  },

};
export default validateUserSignup;
