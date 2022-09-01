import SignupPage from '../../pages/SignupPage';

describe("Cadastro", function () {

    beforeEach(function () {
        cy.fixture('deliver.json').then((massa) => {
            this.deliver = massa

        })

    })

    let signup = new SignupPage()

    it("Usuário deve se tornar um entregador", function () {

        signup.go()
        signup.fillForm(this.deliver.signup)
        signup.submit()
        signup.modalContentShouldBe()
    })

    it("CPF Incorreto", function () {

        signup.go()
        signup.fillForm(this.deliver.cpf_inv)
        signup.submit()
        signup.alertMessageShouldBe("Oops! CPF inválido")
    })
})