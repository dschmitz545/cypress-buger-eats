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

    it.only('Require fields', function(){

        signup.go()
        signup.submit()
        signup.alertMessageShouldBe('É necessário informar o nome')
        signup.alertMessageShouldBe('É necessário informar o CPF')
        signup.alertMessageShouldBe('É necessário informar o email')
        signup.alertMessageShouldBe('É necessário informar o CEP')
        signup.alertMessageShouldBe('É necessário informar o número do endereço')
        signup.alertMessageShouldBe('Adicione uma foto da sua CNH')
        signup.alertMessageShouldBe('Selecione o método de entrega')
    })
})