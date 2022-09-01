import signupPage from '../../pages/SignupPage';
import signupFactory from '../../factories/SignupFactory';

describe("Signup", function () {

    // beforeEach(function () {
    //     cy.fixture('deliver.json').then((massa) => {
    //         this.deliver = massa

    //     })

    // })

    let signup = new signupPage()
    
    it("User should be deliver", function () {
        
        let deliver = signupFactory.deliver()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.modalContentShouldBe()
    })

    it("Invalid document", function () {

        let deliver = signupFactory.deliver()

        deliver.cpf = "221682422AA"

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe("Oops! CPF inválido")
    })

    it("Incorrent email", function () {

        let deliver = signupFactory.deliver()

        deliver.email = "naotenho.com.br"

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe("Oops! Email com formato inválido.")
    })
})