class Toast {
    constructor() {
        this.DOM = document.querySelector('body');

        this.render();
    }

    render() {
        const HTML = `<div class="toast" data-state="success">
                        <i class="fa fa-check"></i>
                        <i class="fa fa-info-circle"></i>
                        <i class="fa fa-exclamation-triangle"></i>
                        <i class="fa fa-shield"></i>
                        <div class="texts">
                            <div class="title">Form validation</div>
                            <div class="message">Demo message about action with a form Demo message about action with a form </div>
                        </div>
                        <i class="fa fa-times"></i>
                    </div>`;

        this.DOM.insertAdjacentHTML('beforeend', HTML);
    }
}

export { Toast }