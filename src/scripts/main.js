class Main {
    /**
     * Creates an instance of Main.
     * @param {any} root 
     * @memberof Main
     */
    constructor(root) {
        this.root = root;
    }

    /**
     * Create new DOM events
     * 
     * @memberof Main
     */
    addDOMevents() {
        U('.create-btn').click(() => {
            this.openAddWindow();
        });
    }

    /**
     * Function show create window
     * 
     * @memberof Main
     */
    openAddWindow() {
        U('.create-board').addClass('add');
        this.menageCreatingWindow();
    }
    
    menageCreatingWindow() {
        let creationContent = U('.creation-content'),
            cencelBtn = U('.creation-content .cencel');

        cencelBtn.click((e) => {
            e.preventDefault();
            U('.create-board').removeClass('add');
        })
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