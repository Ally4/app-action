/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable object-curly-newline */
import dotenv from 'dotenv';

dotenv.config();

const welcome = (req, res, err) => {
  try {
         return  res.status(200).json({
        status: 200,
        message: "Welcome to our todo application which is wonderful, its okay to make mistakes as long as you can learn from them"
      });
}catch(err){
  console.log("This is the error", err)
  return  res.status(500).json({
    status: 500,
    message: err
  })
};
  }


export default welcome;
