

describe("home page", () => {
    it("deve estar online", () => {
        cy.viewport(1024, 768)
        cy.visit("https://buger-eats.vercel.app/")
        cy.get('#page-home main h1').should("have.text", "Seja um parceiro entregador pela Buger Eats")
    })
})