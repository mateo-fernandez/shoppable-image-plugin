import {createPopper} from "@popperjs/core/lib/popper-lite";
import offset from "@popperjs/core/lib/modifiers/offset";
import arrow from "@popperjs/core/lib/modifiers/arrow";
import flip from "@popperjs/core/lib/modifiers/flip";

export const createShoppableElement = (parent, content) => {
  new ShoppableElement(parent, content);
}

class ShoppableElement {
  constructor(parent, content) {
    this.parent = parent;
    this.coord = content.coord;
    this.title = content.title;
    this.descr = content.description;
    this.initElement()
  }

  initElement() {
    const dot = this.createTemplateDot();
    const tooltip = this.createTemplateTooltip(this.title, this.descr);
    this.parent.append(dot);
    this.parent.append(tooltip);
    dot.onclick = () => tooltip.classList.toggle('hide');

    this.createPopperTooltip(dot, tooltip);
  }

  createTemplateDot() {
    const template = document.createElement('div');
    template.classList.add('dot');
    template.style.left = this.coord.x;
    template.style.top = this.coord.y;

    return template;
  }

  createTemplateTooltip(title, descr) {
    const template = document.createElement('div');
    template.classList.add('tooltip', 'hide');
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
    template.innerHTML += '<div class="arrow" data-popper-arrow></div>';

    template.append(titleTemplate, descrTemplate, aTemplate);
    return template;
  }

  createPopperTooltip(reference, tooltip) {
    offset.options = {offset: [0, 10]};
    arrow.options = {padding: 5};
    flip.options = { fallbackPlacements: ['left', 'top', 'bottom'] };

    createPopper(reference, tooltip, {
      placement: 'right',
      modifiers: [offset, arrow, flip],
    });
  }
}
