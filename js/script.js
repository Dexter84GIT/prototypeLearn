'use strict'

const container = document.querySelector(".container");

const DomElement = function(selector, height, width, bg, fsz) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fsz = fsz;

    this.createElement = function () {
        let elem
        if (selector[0] === '.') {
            elem = document.createElement('div')
            elem.classList.add(selector.slice(1))
        } else if (selector[0] === '#') {
            elem = document.createElement('p')
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

const newElem = new DomElement(".p", "50px", "100%", "#ff7800", "30px");

container.appendChild(newElem.createElement());


class First {
    hello() {
        console.log('Привет я метод родителя!')
    }
}
class Second extends First {
    constructor() {
        super()
    }
    hello() {
        return `${super.hello()} + ${console.log('А я наследуемый метод!')}`
    }
}

const link = new Second()
link.hello()


