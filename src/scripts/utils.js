class Utils {
    /**
     * Creates an instance of Utils.
     * @param {String} el 
     * @memberof Utils
     */
    constructor(el) {
        this.el = el;
        this.el.length > 1 ? this.el = document.querySelectorAll(el) : this.el = document.querySelector(el);
        return this;
    }

    /**
     * Function defining click event
     * 
     * @param {Function} callback 
     * @returns Utils instance
     * @memberof Utils
     */
    click(callback) {
        this.el.forEach(el => {
            el.addEventListener('click', (e) => {
                callback(e);
            }, false)
        });
        return this;
    }

    /**
     * Add css classes to element
     * 
     * @param {any} classes 
     * @returns Utils instance
     * @memberof Utils
     */
    addClass(...classes) {
        classes.forEach(cl => {
            this.el.forEach((el) => {
                el.classList.add(cl);
            })
        });
        return this;
    }

    /**
     * Remove css classes to element
     * 
     * @param {any} classes 
     * @returns Utils instance
     * @memberof Utils
     */
    removeClass(...classes) {
        classes.forEach(cl => {
            this.el.forEach((el) => {
                el.classList.remove(cl);
            })
        });
        return this;
    }
};

window.U = (el) => new Utils(el);