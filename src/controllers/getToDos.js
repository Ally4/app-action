/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable object-curly-newline */
import dotenv from 'dotenv';
import sessions from '../models/todos';

dotenv.config();

const getToDos = (req, res) => {
  const data = sessions.forEach();
     return  res.status(200).json({
        status: 200,
        data: {
          data
        },
      });
};

export default getToDos;
