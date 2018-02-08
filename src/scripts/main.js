class Main {
    constructor (root) {
        this.root = root;
    }
    addDomEvents () {
        U('.create-btn').click(() => {
            this.openAddWindow();
        });
    }
    openAddWindow () {
        U('.create-btn').addClass('add');
    }

    init() {
        this.addDomEvents();
    }
}


// Start
(function () {
    window.addEventListener('DOMContentLoaded', function() {
        let root = document.querySelector('#root');
        let main = new Main(root);
        main.init();
    }, false);
})();

