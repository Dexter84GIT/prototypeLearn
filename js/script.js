'use strict'

const container = document.querySelector(".container");

const DomElement = function(selector, height, width, bg, fsz) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fsz = fsz;
    this.createElement = function () {
        let elem = document.createElement('div');
        if (selector[0] === '.') {
            elem.innerHTML = '<div></div>'
            elem.classList.add(selector.slice(1))
        } else if (selector[0] === '#') {
            elem.innerHTML = '<p></p>'
            elem.id = (selector);
        }
        elem.textContent = "Привет, я любой текст";
        elem.style.cssText = `
            height: ${height};
            width: ${width};
            background: ${bg};
            font-size: ${fsz}
        `;
        return elem;
    };
}

const newElem = new DomElement("#id", "50px", "100%", "#ff7800", "30px");

container.appendChild(newElem.createElement());
