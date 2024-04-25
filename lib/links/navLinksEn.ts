import { NavLink } from '@/types/types';

const links: NavLink[] = [
  {
    title: 'My tours',
    path: '/en/circuits',
    items: [
      {
        title: 'Example 1',
        path: '/en/circuits/item1',
        image: '',
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur fugiat explicabo vel iusto dicta quam voluptates accusantium perferendis. Molestiae, a?',
      },
    ],
  },
  {
    title: 'About me',
    path: '/en/que-suis-je',
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
    path: '/en/blog',
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
    title: 'Kyrgyzstan',
    path: '/en/kirghizstan',
  },
];

export default links;
