class Utils {
    constructor (el) {
        this.el = el;
        this.el.length > 1 ? this.el = document.querySelectorAll(el) : this.el = document.querySelector(el);
        return this;
    }
    click (callback) {
        this.el.forEach(el => {
            el.addEventListener('click', (e) => {
                callback();
            }, false)
        });
        return this;
    }
    addClass (...classes) {
        classes.forEach(cl => {
            this.el.forEach((el) => {
                el.classList.add(cl);
            })
        });
        return this;
    }
    removeClass (...classes) {
        classes.forEach(cl => {
            this.el.forEach((el) => {
                el.classList.remove(cl);
            })
        });
        return this;
    }
}

window.U = (el) => new Utils(el);