/* eslint-disable linebreak-style */
/* eslint-disable indent */
import bcrypt from 'bcrypt';

const password = bcrypt.hashSync('Aa1234', 10);
const users = [
    {
    id: 1,
    firstName: 'Mugisha',
    lastName: 'Boris',
    email: 'bonheur@gmail.com',
    password,
    address: 'Rwanda',
    bio: 'Teacher',
    occupation: 'Developer',
    expertise: 'Public-speaker',
    position: 'user',
  },
  {
    id: 2,
    firstName: 'Patrick',
    lastName: 'Reny',
    email: 'patos@gmail.com',
    password,
    address: 'Rwanda',
    bio: 'Teacher',
    occupation: 'developer',
    expertise: 'Public-speaker',
    position: 'mentor',
  },
  {
    id: 3,
    firstName: 'NENGO',
    lastName: 'Ally',
    email: 'admin@gmail.com',
    password,
    position: 'admin',
}];

export default users;
