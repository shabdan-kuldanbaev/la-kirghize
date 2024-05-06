import { ILinks } from '@/types/types';

const links: ILinks = {
  fr: [
    {
      title: 'Accueil',
      path: '/fr',
    },
    {
      title: 'Mes circuits',
      path: '/fr/circuits',
      items: [
        {
          title: 'Randonnée à cheval 15 jours',
          path: '/fr/circuits/randonnee-a-cheval-15-jours',
          image: 'https://cdn.sanity.io/images/yv23ej5m/production/0e168e50b45f1d204393289e9e4f38f86d6a404b-1920x1280.jpg',
          description:
            '',
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
  ],
  en: [
    {
      title: 'Home',
      path: '/en',
    },
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
  ],
};

export default links;
