/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable space-before-blocks */
import dotenv from 'dotenv';

dotenv.config();

const authent = (req, res, next) => {
  const bearerHeader = req.headers.authorization;
  if (typeof bearerHeader !== 'undefined'){
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
    } else {
      res.status(403).json({
        status: 403,
        error: 'Forbidden',
      });
    }
  };

export default authent;
