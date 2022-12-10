/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable object-curly-newline */
/* eslint-disable radix */
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import users from '../models/users';


dotenv.config();


const getAMentor = (req, res) => {
  const user = users.find(i => i.id === parseInt(req.params.mentorId));
  jwt.verify(req.token, process.env.THE_KEY, (err, theUser) => {
    if (err) {
      res.status(401).json({
        status: 401,
        error: 'Some credentials are not right',
      });
    } else if (theUser.position === 'mentor') {
      res.status(403).json({
        status: 403,
        error: 'Access denied, you are not allowed',
      });
    } else if (!user) {
      res.status(404).json({
        status: 404,
        error: 'The mentor`s Id is not found',
      });
    } else if (user.position !== 'mentor') {
      res.status(403).json({
        status: 403,
        error: 'The given ID is not a mentor ID',
      });
    } else {
      res.status(200).json({
        status: 200,
        user,
      });
    }
  });
};

export default getAMentor;
