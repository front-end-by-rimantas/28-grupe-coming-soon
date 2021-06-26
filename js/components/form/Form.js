class Form {
    constructor(selector) {
        this.selector = selector;

        this.formDOM = null;
        this.allInputsDOM = [];
        this.submitButtonDOM = null;

        this.init();
    }

    init() {
        if (!this.isValidSelector()) {
            console.error('ERROR: nevalidus selector');
            return false;
        }

        this.formDOM = document.querySelector(this.selector);
        if (!this.formDOM) {
            console.error('ERROR: nerastas formos elementas');
            return false;
        }

        this.allInputsDOM = this.formDOM.querySelectorAll('input, textarea');
        this.submitButtonDOM = this.formDOM.querySelector('button[type="submit"]');

        this.addEvents();
    }

    isValidSelector() {
        return true;
    }

    isValidName(name) {
        if (this.isEmptyString(name)) {
            return false;
        }
        return true;
    }

    isValidEmail(email) {
        if (this.isEmptyString(email)) {
            return false;
        }
        return true;
    }

    isValidText(text) {
        if (this.isEmptyString(text)) {
            return false;
        }
        return true;
    }

    isEmptyString(string) {
        return typeof string !== 'string' || string === '';
    }

    addEvents() {
        this.submitButtonDOM.addEventListener('click', (event) => {
            // submit mygtuko paspaudimo metu reikia isjungti default veikima
            event.preventDefault();

            // issitraukti is visu formos lauku informacija
            // eiti per visus laukus ir atpazinus informacijos tipa atlikti tos informacijos validacija
            let allGood = true;

            for (const inputDOM of this.allInputsDOM) {
                const validationRule = inputDOM.dataset.validation;
                const value = inputDOM.value;

                if (validationRule === 'email' && !this.isValidEmail(value)) {
                    allGood = false;
                    break;
                }
                if (validationRule === 'name' && !this.isValidName(value)) {
                    allGood = false;
                    break;
                }
                if (validationRule === 'text' && !this.isValidText(value)) {
                    allGood = false;
                    break;
                }
            }


            // jei patikrinus visus laukus, nerasta nei vienos klaidos, tai "siunciam pranesima"
            // jei patikrinus visus laukus, nerasta bent viena klaida, tai parodome visu klaidos pranesimus (kol kas, viskas pateikiama i console)
            console.log('All good:', allGood);
        })
    }
}

export { Form }