/* eslint-disable linebreak-style */
/* eslint-disable radix */
/* eslint-disable import/no-unresolved */
/* eslint-disable object-curly-newline */
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import sessions from '../models/sessions';

dotenv.config();

const reject = (req, res) => {
  jwt.verify(req.token, process.env.THE_KEY, (err, theUser) => {
    const session = sessions.find(c => c.id === parseInt(req.params.sessionId));
    if (err) {
      res.status(401).json({
        status: 401,
        error: 'Some credentials are not right',
      });
    } else if (theUser.position !== 'mentor') {
      res.status(403).json({
        status: 403,
        error: 'Access denied, not allowed',
      });
    } else if (!session) {
      res.status(404).json({
        status: 404,
        error: 'Session request not found',
      });
    } else if (theUser.id !== session.mentorId) {
      res.status(403).json({
        status: 403,
        error: 'The session`s Id does not match with the mentor Id',
      });
    } else if (session.status === 'rejected') {
      res.status(409).json({
        status: 409,
        error: 'The session request already rejected',
      });
    } else {
      session.status = 'rejected';
      res.status(200).json({
        status: 200,
        data: {
          session,
        },
      });
    }
  });
};

export default reject;
