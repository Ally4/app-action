/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable spaced-comment */
import express from 'express';
import signup from '../controllers/signup';
import signin from '../controllers/signin';
import authent from '../middleware/authent';
import create from '../controllers/create';
import getAMentor from '../controllers/mentor';
import getMentors from '../controllers/mentors';


const router = express.Router();

//For the signup
router.post('/api/v1/auth/signup', signup);

//For the signin
router.post('/api/v1/auth/signin', signin);

//for the creation of the session
router.post('/api/v1/sessions', authent, create);

//for a mentor by id
router.get('/api/v1/mentors/:mentorId', authent, getAMentor);

//for all the mentors
router.get('/api/v1/mentors', authent, getMentors);


export default router; 
