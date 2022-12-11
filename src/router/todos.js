/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable spaced-comment */
import express from 'express';
import getToDos from '../controllers/getToDos';
import update from '../controllers/updateToDo';
import deleted from '../controllers/deleteToDo';
import create from '../controllers/createToDo';
import welcome from "../controllers/welcome"


const router = express.Router();

router.post('/api/v1/auth/signup', create);

router.put('/api/v1/auth/signin', update);

router.delete('/api/:id', deleted);

router.get('/api/todos', getToDos);

router.get('/api/welcome', welcome)

export default router; 
