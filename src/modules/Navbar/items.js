import { nanoid } from 'nanoid';

const items = [
  {
    id: nanoid(),
    text: 'Home page',
    link: '/goit-react-hw-05-movies/',
  },
  {
    id: nanoid(),
    text: 'Movies',
    link: '/goit-react-hw-05-movies/movies',
  },
];

export default items;
