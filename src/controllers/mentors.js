/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable padded-blocks */
/* eslint-disable object-curly-newline */
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import users from '../models/users';

dotenv.config();

const mentors = (req, res) => {

  const mentor = users.filter(s => s.position === 'mentor');

  jwt.verify(req.token, process.env.THE_KEY, (err, theUser) => {
    if (err) {
      res.status(401).json({
        status: 401,
        error: 'Some credentials are not right',
      });
    } else if (theUser.position === 'mentor') {
      res.status(403).json({
        status: 403,
        error: 'Access denied, not allowed',
      });
    } else {
      res.status(200).json({
        status: 200,
        mentor,
      });
    }
  });

};


export default mentors;
