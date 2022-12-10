/* eslint-disable linebreak-style */
/* eslint-disable newline-per-chained-call */
import Joi from 'joi';

const validateUserSession = {

  validation(newSession) {
    const newSessionSchema = {
      mentorId: Joi.number().required(),
      question: Joi.string().min(6).max(50).required(),
    };
    return Joi.validate(newSession, newSessionSchema);
  },
};

export default validateUserSession;
