/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable object-curly-newline */
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import sessions from '../models/sessions';

dotenv.config();

const create = (req, res) => {
  jwt.verify(req.token, process.env.THE_KEY, (err, theUser) => {
    if (err) {
      res.status(401).json({
        status: 401,
        error: 'Some credentials are not right',
      });
    } else if (theUser.position !== 'user') {
      res.status(403).json({
        status: 403,
        error: 'Access denied',
      });
    } else {
      const session = {
        id: sessions.length + 1,
        mentorId: req.body.mentorId,
        menteeId: theUser.id,
        questions: req.body.questions,
        menteeEmail: theUser.email,
        status: 'pending',
      };
      sessions.push(session);
      res.status(201).json({
        status: 201,
        data: {
          session,
        },
      });
    }
  });
};

export default create;
