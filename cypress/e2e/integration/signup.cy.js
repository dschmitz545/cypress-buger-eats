import SignupPage from '../../pages/SignupPage';

describe("Signup", function () {

    beforeEach(function () {
        cy.fixture('deliver.json').then((massa) => {
            this.deliver = massa

        })

    })

    let signup = new SignupPage()

    it("User should be deliver", function () {

        signup.go()
        signup.fillForm(this.deliver.signup)
        signup.submit()
        signup.modalContentShouldBe()
    })

    it("Invalid document", function () {

        signup.go()
        signup.fillForm(this.deliver.cpf_inv)
        signup.submit()
        signup.alertMessageShouldBe("Oops! CPF inválido")
    })

    it("Incorrent email", function () {
        signup.go()
        signup.fillForm(this.deliver.email_inv)
        signup.submit()
        signup.alertMessageShouldBe("Oops! Email com formato inválido.")
    })
})