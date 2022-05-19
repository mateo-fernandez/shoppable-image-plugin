import {createShoppableElement} from "./ShoppableElement";

export const createShoppableImage = async (parent, url) => {
  const res = await fetch(url);
  const config = await res.json();

  const imgProduct = document.createElement('img');
  imgProduct.alt = config.title;
  imgProduct.src = config.src;
  imgProduct.width = config.width;
  parent.append(imgProduct);

  for (const product of config.products) {
    createShoppableElement(parent, product);
  }
}
