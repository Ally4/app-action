/* eslint-disable linebreak-style */
import bcrypt from 'bcrypt';

const password = bcrypt.hashSync('Aa1234', 10);

const mentors = [
  {
    mentorId: 1,
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
];

export default mentors;
