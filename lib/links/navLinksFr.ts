import { NavLink } from '@/types/header';

const links: NavLink[] = [
  {
    title: 'Mes circuits',
    path: '/circuits',
    items: [
      {
        title: 'Example 1',
        path: '/circuits/item1',
        image: '',
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur fugiat explicabo vel iusto dicta quam voluptates accusantium perferendis. Molestiae, a?',
      },
    ],
  },
  {
    title: 'Qui suis je ?',
    path: '/que-suis-je',
    items: [
      {
        title: 'Example 1',
        path: '/path',
        image: '',
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur fugiat explicabo vel iusto dicta quam voluptates accusantium perferendis. Molestiae, a?',
      },
    ],
  },
  {
    title: 'Blog',
    path: '/blog',
    items: [
      {
        title: 'Example 1',
        path: '/path',
        image: '',
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur fugiat explicabo vel iusto dicta quam voluptates accusantium perferendis. Molestiae, a?',
      },
    ],
  },
  {
    title: 'Kirghizstan',
    path: '/kirghizstan',
  },
];

export default links;
