import * as Popper from "@popperjs/core";

export const createShoppableImage = (parent, ref, data) => {
  new ShoppableImage(parent, ref, data);
}

class ShoppableImage {
  constructor(parent, reference, data) {
    this.parent = parent;
    this.reference = reference;
    this.coord = data.coord;
    this.title = data.title;
    this.descr = data.description;
    this.initElement()
  }

  initElement() {
    this.reference.style.left = this.coord.x;
    this.reference.style.top = this.coord.y;
    const tooltip = this.createTemplateTooltip(this.title, this.descr);
    this.parent.append(tooltip);

    Popper.createPopper(this.reference, tooltip, {
      placement: 'right',
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 10],
          },
        },
      ],
    });
    this.attachListener(tooltip);
  }

  attachListener(tooltip) {
    this.reference.addEventListener('mouseover', () => console.log('test'));
  }

  createTemplateTooltip(title, descr) {
    const template = document.createElement('div');
    template.classList.add('tooltip');
    template.setAttribute('role', 'tooltip');
    const titleTemplate = document.createElement('h2');
    titleTemplate.classList.add('title--tooltip');
    titleTemplate.textContent = title;
    const descrTemplate = document.createElement('p');
    descrTemplate.classList.add('description--tooltip')
    descrTemplate.textContent = descr;
    const aTemplate = document.createElement('a');
    aTemplate.classList.add('btn--tooltip');
    aTemplate.textContent = 'Plus d\'infos';
    aTemplate.href = '';

    template.append(titleTemplate);
    template.append(descrTemplate);
    template.append(aTemplate);
    return template;
  }
}
