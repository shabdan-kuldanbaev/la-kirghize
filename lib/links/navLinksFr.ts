import { NavLink } from '@/types/types';

const links: NavLink[] = [
  {
    title: 'Mes circuits',
    path: '/fr/circuits',
    items: [
      {
        title: 'Example 1',
        path: '/fr/circuits/item1',
        image: '',
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur fugiat explicabo vel iusto dicta quam voluptates accusantium perferendis. Molestiae, a?',
      },
    ],
  },
  {
    title: 'Qui suis je ?',
    path: '/fr/que-suis-je',
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
    path: '/fr/blog',
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
    path: '/fr/kirghizstan',
  },
];

export default links;
