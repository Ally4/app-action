/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable spaced-comment */
import express from 'express';
import authent from '../middleware/authent';
import sessions from '../controllers/sessions';
import reject from '../controllers/reject';
import accept from '../controllers/accept';


const router = express.Router();


//for the viewing of sessions
router.get('/api/v1/sessionsView', authent, sessions);

//for the mentor to reject the session
router.patch('/api/v1/sessions/:sessionId/reject', authent, reject);

//for the mentor to accept the session
router.patch('/api/v1/sessions/:sessionId/accept', authent, accept);


export default router; 
