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

    context('Incorrect email', function(){

        let deliver = signupFactory.deliver()
        deliver.email = "naotenho.com.br";

        before(function (){
            signup.go()
            signup.fillForm(deliver)
            signup.submit()
        })

        it('Email incorrect', function (){
            signup.alertMessageShouldBe("Oops! Email com formato inválido.")
        })

    })

    // it.only("Incorrect email", function () {
    //
    //     let deliver = signupFactory.deliver()
    //
    //     deliver.email = "naotenho.com.br"
    //
    //     signup.go()
    //     signup.fillForm(deliver)
    //     signup.submit()
    //     signup.alertMessageShouldBe("Oops! Email com formato inválido.")
    // })

    context('Require fields', function () {

        const messages = [
            {field: 'name', output: 'É necessário informar o nome'},
            {field: 'cpf', output: 'É necessário informar o CPF'},
            {field: 'email', output: 'É necessário informar o email'},
            {field: 'postalcode', output: 'É necessário informar o CEP'},
            {field: 'number', output: 'É necessário informar o número do endereço'},
            {field: 'cnh', output: 'Adicione uma foto da sua CNH'},
            {field: 'delivery_method', output: 'Selecione o método de entrega'}
        ]

        before(function (){
            signup.go()
            signup.submit()
        })

        messages.forEach(function (msg){
            it(`${msg.field} is required`, function (){
                signup.alertMessageShouldBe(msg.output)
            })
        })
    })

    // it('Require fields', function () {
    //
    //     signup.go()
    //     signup.submit()
    //     signup.alertMessageShouldBe('É necessário informar o nome')
    //     signup.alertMessageShouldBe('É necessário informar o CPF')
    //     signup.alertMessageShouldBe('É necessário informar o email')
    //     signup.alertMessageShouldBe('É necessário informar o CEP')
    //     signup.alertMessageShouldBe('É necessário informar o número do endereço')
    //     signup.alertMessageShouldBe('Adicione uma foto da sua CNH')
    //     signup.alertMessageShouldBe('Selecione o método de entrega')
    // })
})