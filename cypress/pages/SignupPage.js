class SignupPage {
    go() {
        cy.viewport(1024, 768)
        cy.visit("/")

        cy.get('#page-home .content a[href="/deliver"]').click()
        cy.get("#page-deliver h1").should("have.text", "Cadastre-se para  fazer entregas")
    }

    fillForm(deliver) {

        cy.get('#page-deliver input[placeholder="Nome completo"]').type(deliver.name)
        cy.get('#page-deliver input[name="cpf"]').type(deliver.cpf)
        cy.get('#page-deliver input[type="text"][placeholder="E-mail').type(deliver.email)
        cy.get('#page-deliver input[placeholder="Whatsapp"]').type(deliver.whatsapp)

        cy.get('#page-deliver .field-group input[name="postalcode"]').type(deliver.address.postalcode)
        cy.get('#page-deliver .field input[type="button"][value="Buscar CEP"]').click()

        cy.get('#page-deliver .field input[name="address-number"][placeholder="Número"]').type(deliver.address.number)
        cy.get('#page-deliver .field input[name="address-details"][placeholder="Complemento"]').type(deliver.address.details)

        cy.get('#page-deliver .field input[name="address"][placeholder="Rua"]').should("have.value", deliver.address.street)
        cy.get('#page-deliver .field input[name="district"][placeholder="Bairro"]').should("have.value", deliver.address.district)
        cy.get('#page-deliver .field input[name="city-uf"][placeholder="Cidade/UF"]').should("have.value", deliver.address.city_state)

        cy.contains('.delivery-method li', deliver.delivery_method).click();

        cy.get('.dropzone input[accept^="image"][type="file"]').selectFile(deliver.cnh, { force: true });

    }

    submit() {
        cy.get('#page-deliver .button-success[type="submit"]').click();
    }

    modalContentShouldBe() {

        cy.get('.swal2-container div[class="swal2-html-container"]').should("have.text", "Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.")

    }

    alertMessageShouldBe(expectMessage) {
        // cy.get('.field-group .field .alert-error').should("have.text", expectMessage)
        cy.contains('.alert-error', expectMessage).should("be.visible")
    }

}
export default SignupPage;