/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable spaced-comment */
import express from 'express';
import authent from '../middleware/authent';
import change from '../controllers/change';
import getAMentor from '../controllers/mentor';
import getMentors from '../controllers/mentors';
import getUsers from '../controllers/users';


const router = express.Router();

//for the patches
router.patch('/api/v1/user/:userId', authent, change);

//for a mentor by id
router.get('/api/v1/mentors/:mentorId', authent, getAMentor);

//for all the mentors
router.get('/api/v1/mentors', authent, getMentors);

//for getting all the users
router.get('/api/v1/users', authent, getUsers);


export default router; 
