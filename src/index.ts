import './styles/style.scss';
import {ConfigElementType, ConfigType} from "./types";
import {ShoppableElement} from './shoppable_element';

const createShoppableImage = (parent: Element, config: ConfigType) => {
    const img: HTMLImageElement = document.createElement('img');
    img.alt = config.title;
    img.src = '/uploads/images/' + config.src;
    parent.appendChild(img);

    config.elements.forEach((element: ConfigElementType) => new ShoppableElement(parent, element));
}

const divShoppables: NodeListOf<Element> = document.querySelectorAll("div[data-shoppable-img='0423b209-52de-40f8-a88a-7b3330a8b12e']");
const config: ConfigType = JSON.parse('{"title":"Ikea","elements":[{"title":"Horloge TAK","description":"Prix : 7.99\u20ac","coord":{"x":90,"y":30},"url":""},{"title":"Tabouret LUL","description":"Prix : 15\u20ac","coord":{"x":86,"y":85},"url":""},{"title":"Canap\u00e9 KRAK","description":"Prix : 320\u20ac","coord":{"x":15,"y":70},"url":""},{"title":"TV Samsangue","description":"Prix : 440\u20ac","coord":{"x":70,"y":28},"url":""},{"title":"Chaise TANG","description":"Prix : 25\u20ac","coord":{"x":25,"y":35},"url":""},{"title":"Table LACK","description":"Prix : 20\u20ac","coord":{"x":47,"y":51},"url":""}],"src":"91631f7f-4a12-47ce-a16e-95f9c91a24d6.png"}');

divShoppables.forEach((divShoppable: Element) => createShoppableImage(divShoppable, config));
