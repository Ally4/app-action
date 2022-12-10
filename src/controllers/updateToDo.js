/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable object-curly-newline */
import dotenv from 'dotenv';
import sessions from '../models/todos';

dotenv.config();

const updateToDo = (req, res) => {
  const sessionOne = sessions.find(a => a.id = req.params.id)
      const session = {
        mentorId: req.body.mentorId,
        menteeId: req.body.id,
        questions: req.body.questions,
        menteeEmail: req.body.email,
      };
      sessions.update(session);
      res.status(201).json({
        status: 201,
        data: {
          session,
        },
      });
};

export default updateToDo;
