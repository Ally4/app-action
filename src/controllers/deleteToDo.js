/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable object-curly-newline */
import dotenv from 'dotenv';
import sessions from '../models/todos';

dotenv.config();

const deleteToDo = (req, res) => {
      sessions.push(session);
      res.status(201).json({
        status: 201,
        message: "The data has been deleted successfull"
      });
};

export default deleteToDo;
