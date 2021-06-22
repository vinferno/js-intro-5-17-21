class HtmlHelper {
    name = 'HtmlHelper';
    activeElement = null;

    createElement(type = 'span') {
        return document.createElement(type);
    }

    appendChild(child, parent = document.body) {
        console.log(parent, child);
        return parent.appendChild(child)
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
        this.activeElement.innerText = text;
    }

    changePosition( x, y){
        this.activeElement.style.position = 'absolute';
        this.activeElement.style.left = x + 'px';
        this.activeElement.style.top = y + 'px';
    }

    setActiveElement(element) {
        this.activeElement = element;
    }

    addEventListener(eventType, callback) {
        this.activeElement.addEventListener(eventType, callback)
    }

}


export const htmlHelper = new HtmlHelper();