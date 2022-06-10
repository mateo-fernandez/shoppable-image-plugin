import offset from "@popperjs/core/lib/modifiers/offset";
import arrow from "@popperjs/core/lib/modifiers/arrow";
import flip from "@popperjs/core/lib/modifiers/flip";
import {createPopper} from "@popperjs/core/lib/popper-lite";
import {ConfigElementType, CoordType} from "./types";

export class ShoppableElement {
    private readonly parent: Element;
    private readonly title: string;
    private readonly descr: string;
    private readonly coord: CoordType;
    private readonly url: string;

    constructor(parent: Element, content: ConfigElementType) {
        this.parent = parent;
        this.coord = content.coord;
        this.title = content.title;
        this.descr = content.description;
        this.url = content.url;
        this.initElement()
    }

    initElement(): void {
        const dot: HTMLDivElement = this.createTemplateDot();
        const tooltip: HTMLDivElement = this.createTemplateTooltip(this.title, this.descr);
        this.parent.appendChild(dot);
        this.parent.appendChild(tooltip);
        dot.onclick = () => tooltip.classList.toggle('hide');

        this.createPopperTooltip(dot, tooltip);
    }

    createTemplateDot(): HTMLDivElement {
        const template = document.createElement('div');
        template.classList.add('dot');
        template.style.left = this.coord.x + '%';
        template.style.top = this.coord.y + '%';

        return template;
    }

    createTemplateTooltip(title: string, descr: string): HTMLDivElement {
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
        aTemplate.href = this.url;
        template.innerHTML += '<div class="arrow" data-popper-arrow></div>';

        template.append(titleTemplate, descrTemplate, aTemplate);
        return template;
    }

    createPopperTooltip(reference: Element, tooltip: HTMLElement): void {
        offset.options = {offset: [0, 10]};
        arrow.options = {padding: 5};
        flip.options = {fallbackPlacements: ['left', 'top', 'bottom']};

        createPopper(reference, tooltip, {
            placement: 'right',
            modifiers: [offset, arrow, flip],
        });
    }
}
