import { contactInfo } from '../config/contact';

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  imageThumbnail: string;
  images: string[];
  description: string[];
  colors: string[];
  sizes: string[];
  link: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Hoodie Dope - Brixite Original',
    category: 'Hoodie',
    price: 299000,
    imageThumbnail: '/product/org1.png',
    images: [
      '/product/org1.png',
      '/product/org3.png'
    ],
    description: [
      'Trendy hoodie with comfortable fit',
      'Premium quality material with comfortable cotton blend',
      'Available in multiple colors: black, navy, gray',
      '\n',
      'Features:',
      '- Adjustable drawstrings',
      '- Kangaroo pocket',
      '- Ribbed cuffs and hem'
    ],
    colors: ['Black', 'white'],
    sizes: ['M', 'L'],
    link: contactInfo.socialMedia.whatsapp
  },
  {
    id: 2,
    name: 'Sweater Dope - Brixite Original',
    category: 'Sweater',
    price: 280000,
    imageThumbnail: '/product/org2.png',
    images: [
      '/product/org2.png'
    ],
    description: [
      'Trendy hoodie with comfortable fit',
      'Premium quality material with comfortable cotton blend',
      'Available in multiple colors: black, navy, gray',
      '\n',
      'Features:',
      '- Adjustable drawstrings',
      '- Kangaroo pocket',
      '- Ribbed cuffs and hem'
    ],
    colors: ['Black', 'white'],
    sizes: ['M', 'L'],
    link: contactInfo.socialMedia.whatsapp
  },

  // Add more products as needed
];
