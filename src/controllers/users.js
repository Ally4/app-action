/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable object-curly-newline */
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import users from '../models/users';

dotenv.config();

const getUsers = (req, res) => {
  const user = users.filter(c => c.position === 'user');
  jwt.verify(req.token, process.env.THE_KEY, (err, theUser) => {
    if (err) {
      res.status(401).json({
        status: 401,
        error: 'Some credentials are not right',
      });
    } else if (theUser.position !== 'admin') {
      res.status(403).json({
        status: 403,
        error: 'Access denied, you are not allowed',
      });
    } else {
      res.status(200).json({
        status: 200,
        user,
      });
    }
  });
};

export default getUsers;
