import {createShoppableImage} from './ShoppableImage';

import './styles/style.scss';

const img0 = document.querySelector('#img-0');
createShoppableImage(img0, 'http://localhost:8080/config_img_0.json');

const img1 = document.querySelector('#img-1');
createShoppableImage(img1, 'http://localhost:8080/config_img_1.json');
