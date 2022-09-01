

describe("Cadastro", function(){
    it("Usuário deve se tornar um entregador", function(){
        cy.viewport(1024, 768)
        cy.visit("https://buger-eats.vercel.app/")

        cy.get('#page-home .content a[href="/deliver"]').click()
        cy.get("#page-deliver h1").should("have.text", "Cadastre-se para  fazer entregas")

        let entregador = {
            nome: "Thiago Cunha Lima",
            cpf: "44529661369",
            email: "thiagocunhalima@teleworm.us",
            whatsapp: "1151937376",
            endereco: {
                cep: "05742120",
                rua: "Rua José de Almeida Soares",
                num: "1428",
                complemento: "Apto 202",
                bairro: "Jardim Taboão",
                cidade_uf: "São Paulo/SP"
            },
            metodo_entrega: "Moto",
            cnh: "cypress/fixtures/images/cnh-digital.jpg"
        }

        cy.get('#page-deliver input[placeholder="Nome completo"]').type(entregador.nome)
        cy.get('#page-deliver input[name="cpf"]').type(entregador.cpf)
        cy.get('#page-deliver input[type="email"]').type(entregador.email)
        cy.get('#page-deliver input[placeholder="Whatsapp"]').type(entregador.whatsapp)

        cy.get('#page-deliver .field-group input[name="postalcode"]').type(entregador.endereco.cep)
        cy.get('#page-deliver .field input[type="button"][value="Buscar CEP"]').click()

        cy.get('#page-deliver .field input[name="address-number"][placeholder="Número"]').type(entregador.endereco.num)
        cy.get('#page-deliver .field input[name="address-details"][placeholder="Complemento"]').type(entregador.endereco.complemento)

        cy.get('#page-deliver .field input[name="address"][placeholder="Rua"]').should("have.value", entregador.endereco.rua)
        cy.get('#page-deliver .field input[name="district"][placeholder="Bairro"]').should("have.value", entregador.endereco.bairro)
        cy.get('#page-deliver .field input[name="city-uf"][placeholder="Cidade/UF"]').should("have.value", entregador.endereco.cidade_uf)

        cy.contains('.delivery-method li', entregador.metodo_entrega).click();

        cy.get('.dropzone input[accept^="image"][type="file"]').selectFile(entregador.cnh, {force: true});
        cy.get('#page-deliver .button-success[type="submit"]').click();
        cy.get('.swal2-container div[class="swal2-html-container"]').should("have.text", "Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.")
    })
})