/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable radix */
/* eslint-disable object-curly-newline */
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import users from '../models/users';

dotenv.config();


const change = (req, res) => {
  const user = users.find(i => i.id === parseInt(req.params.userId));

  jwt.verify(req.token, process.env.THE_KEY, (err, theUser) => {
    if (err) {
      res.status(401).json({
        status: 401,
        error: 'Some credentials are not right',
      });
    } else if (theUser.position !== 'admin') {
      res.status(403).json({
        status: 403,
        error: 'Access denied, not allowed',
      });
    } else if (!user) {
      res.status(404).json({
        status: 404,
        error: 'User`s Id is not found',
      });
    } else if (user.position === 'admin' || user.position === 'mentor') {
      res.status(401).json({
        status: 401,
        error: 'Must be of position user',
      });
    } else {
      user.position = 'mentor';
      users.push(user);
      res.status(200).json({
        status: 200,
        message: 'User changed to mentor',
        user,
      });
    }
  });
};

export default change;
