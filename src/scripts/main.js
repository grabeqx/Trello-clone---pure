class Main {
    /**
     * Creates an instance of Main.
     * @param {any} root 
     * @memberof Main
     */
    constructor (root) {
        this.root = root;
    }

    /**
     * Create new DOM events
     * 
     * @memberof Main
     */
    addDOMevents () {
        U('.create-btn').click(() => {
            this.openAddWindow();
        });
    }

    /**
     * Function show create window
     * 
     * @memberof Main
     */
    openAddWindow () {
        U('.create-btn').addClass('add');
    }

    /**
     * Initialize app
     * 
     * @memberof Main
     */
    init() {
        this.addDOMevents();
    }
}


// Start
(function () {
    window.addEventListener('DOMContentLoaded', function() {
        var root = document.querySelector('#root');
        var main = new Main(root);
        main.init();
    }, false);
})();

