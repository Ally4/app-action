/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable object-curly-newline */

import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import users from '../models/users';
import validateUserSignup from '../validators/signup';

dotenv.config();

const signup = (req, res) => {
  const { error } = validateUserSignup.validation(req.body);
  if (error) {
    return res.status(400).json({
      status: 400,
      error: error.details[0].message,
    });
  }
  const user = users.find(e => e.email === req.body.email);
  if (user) {
    return res.status(409).json({
      status: 409,
      error: 'The email is already registered',
    });
  }
  const id = parseInt(users.length + 1, 10);
  const password = bcrypt.hashSync(req.body.password, 10);
  const { firstName, lastName, email, address, bio, occupation, expertise } = req.body;
  users.push({ id, firstName, lastName, email, password, address, bio, occupation, expertise, position: 'user' });
  const payload = {
    id, firstName, lastName, email, position: 'user',
  };
  const token = jwt.sign(payload, process.env.THE_KEY);
  return res.status(201).json({
    status: 201,
    message: 'User created successfully!.',
    data: {
      token,
    },
  });
};

export default signup;
