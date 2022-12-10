/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable object-curly-newline */
/* eslint-disable object-shorthand */
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import users from '../models/users';
import validateUserSignin from '../validators/signin';


dotenv.config();

const signin = (req, res) => {
  const { email, password } = req.body;
  const { error } = validateUserSignin.validation(req.body);
  if (error) {
    return res.status(400).json({ status: 400, error: error.details[0].message });
  }
  const user = users.find(e => e.email === email);
  if (!user) {
    return res.status(404).json({
      status: 404,
      message: 'Same credential must be wrong',
    });
  }
  const comparePassword = bcrypt.compareSync(password, user.password);
  if (!comparePassword) {
    return res.status(400).json({
      status: 400,
      error: 'The information might not be right',
    });
  }
  const payload = {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    position: user.position,
  };
  const token = jwt.sign(payload, process.env.THE_KEY);
  return res.status(200).json({
    status: 200,
    message: 'User is successfully logged in!.',
    data: {
      payload,
      token: token,
    },
  });
};


export default signin;
