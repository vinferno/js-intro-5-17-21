class HtmlHelper {
    name = 'HtmlHelper';
    activeElement = null;
    everyElementArray = [];

    createElement(type = 'span', name) {
        const element = document.createElement(type);
        this.everyElementArray.push(element);

        if (name) {
            this.giveName(element, name);
        }
        this.setActiveElement(element);
        return element;
    }

    giveName(element, name) {
        element.id = name;
    }

    getByName(name) {
        return this.everyElementArray.find( item => item.id === name);
    }

    setActiveByName(name) {
        this.activeElement = this.getByName(name);
    }

    appendChild(name, parent = document.body) {
        return parent.appendChild(this.getByName(name))
    }

    addStyle(style) {
        for (let key in style) {
            this.activeElement.style[key] = style[key];
        }
    }

    toggleClass( className) {
        this.activeElement.classList.toggle(className);
    }

    addText( text){
        console.log(this.activeElement);
        this.activeElement.innerText = text;
    }

    changePosition( x, y){
        this.activeElement.style.position = 'absolute';
        this.activeElement.style.left = x + 'px';
        this.activeElement.style.top = y + 'px';
    }

    setActiveElement(name) {
        this.activeElement = this.getByName(name);
    }

    addEventListener(eventType, callback) {
        this.activeElement.addEventListener(eventType, callback)
    }

}


export const htmlHelper = new HtmlHelper();