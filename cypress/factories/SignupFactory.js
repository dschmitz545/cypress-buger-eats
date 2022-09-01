let faker = require('faker');
let cpf = require('gerador-validador-cpf');

export default {
    deliver: function () {

        let firstName = faker.name.firstName()
        let lastName = faker.name.lastName()

        let data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '1151937376',
            address: {
                postalcode: '05742120',
                street: 'Rua José de Almeida Soares',
                number: '1428',
                details: 'Apto 202',
                district: 'Jardim Taboão',
                city_state: 'São Paulo/SP'
            },
            delivery_method: 'Moto',
            cnh: 'cypress/fixtures/images/cnh-digital.jpg'
        }

        return data
    }
}