/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable object-curly-newline */
import dotenv from 'dotenv';
import sessions from '../models/todos';

dotenv.config();

const create = (req, res) => {
      const session = {
        id: sessions.length + 1,
        mentorId: req.body.mentorId,
        menteeId: theUser.id,
        questions: req.body.questions,
        menteeEmail: theUser.email,
      };
      sessions.push(session);
      res.status(201).json({
        status: 201,
        data: {
          session,
        },
      });
};

export default create;
