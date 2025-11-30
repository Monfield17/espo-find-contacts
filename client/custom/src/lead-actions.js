define(['action-handler'], (Dep) => {

    return class extends Dep {

        /**
         * Funkce pro vyhledání kontaktů 
         */
        async findContact() {

            const email = this.view.model.get('emailAddress');

            if (!email) {
                Espo.Ui.error('Lead nemá emailovou adresu.');
                return;
            }

            // dotaz na vyhledání Contact podle mailu
            let result;

            try {
                result = await Espo.Ajax.getRequest('Contact', {
                    where: [{
                        type: 'equals',
                        attribute: 'emailAddress',
                        value: email
                    }]
                });
            } catch (e) {
                Espo.Ui.error('Chyba při hledání kontaktů.');
                return;
            }

            // zobrazení výsledků v okně
            this.view.createView(
                'findContactModal',
                'views/modals/select-records',
                {
                    scope: 'Contact',
                    collection: result.list
                },
                view => view.render()
            );
        }
    }
});
