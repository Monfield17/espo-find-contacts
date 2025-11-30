define(['action-handler'], (Dep) => {

    return class extends Dep {

        /**
         * Funkce pro vyhledání kontaktů podle emailu Lead záznamu
         */
        async findContact() {

            const email = this.view.model.get('emailAddress');

            if (!email) {
                Espo.Ui.error('Lead nemá emailovou adresu.');
                return;
            }

            // AJAX dotaz na vyhledání Contact podle emailu
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

            // zobrazení výsledků v modálním okně
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
