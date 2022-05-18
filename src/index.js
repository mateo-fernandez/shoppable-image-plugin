import {createShoppableImage} from './ShoppableImage';

import 'normalize.css/normalize.css';
import './styles/style.scss';

const product0 = document.querySelector('#product-0');

const refProduct01 = document.querySelector('#product-0 .dot[data-tl-id="01"]');
const dataProduct01 = {
  coord: {
    x: '320px',
    y: '450px',
  },
  title: 'Produit 01',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias, architecto cupiditate\n' +
    'dicta dolorem eum eveniet fugit ipsam iste iure nobis officiis porro possimus, recusandae saepe suscipit\n' +
    'totam velit veniam.'
}
createShoppableImage(product0, refProduct01, dataProduct01);

const refProduct02 = document.querySelector('#product-0 .dot[data-tl-id="02"]');
const dataProduct02 = {
  coord: {
    x: '90px',
    y: '500px',
  },
  title: 'Produit 02',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias, architecto cupiditate\n' +
    'dicta dolorem eum eveniet fugit ipsam iste iure nobis officiis porro possimus, recusandae saepe suscipit\n' +
    'totam velit veniam.'
}
createShoppableImage(product0, refProduct02, dataProduct02);

const refProduct03 = document.querySelector('#product-0 .dot[data-tl-id="03"]');
const dataProduct03 = {
  coord: {
    x: '275px',
    y: '400px',
  },
  title: 'Produit 02',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias, architecto cupiditate\n' +
    'dicta dolorem eum eveniet fugit ipsam iste iure nobis officiis porro possimus, recusandae saepe suscipit\n' +
    'totam velit veniam.'
}
createShoppableImage(product0, refProduct03, dataProduct03);
