/// <reference = cypress>
describe("Swag Labs", () => {

    it("1 Loga com dados validos", () => {
        cy.visit("https://www.saucedemo.com")
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="title"]').should('be.visible',)
        cy.get('[data-test="shopping-cart-link"]').should('be.visible')
    })

    it("2 Nao loga com username invalido [FALHA]", () => {
        cy.visit("https://www.saucedemo.com")
        cy.get('[data-test="username"]').type('user_invalido')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should('be.visible',)
    })

    it("3 Nao loga com senha invalida [FALHA]", () => {
        cy.visit("https://www.saucedemo.com")
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('wrong_password')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should('be.visible',)
    })

    it("4 Carrega página de compras", () => {
        cy.visit("https://www.saucedemo.com")
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="title"]').should('be.visible',)
        cy.get('[data-test="shopping-cart-link"]').should('be.visible')
    })

    it("5 Adiciona mochila ao carrinho", () => {
        cy.visit("https://www.saucedemo.com")
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('.shopping_cart_badge').should('have.text', '1')
    })

    it("6 Remove item do carrinho", () => {
        cy.visit("https://www.saucedemo.com")
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('.shopping_cart_badge').should('have.text', '1')
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        cy.get('.shopping_cart_badge').should('not.exist')
    })

    it("7 Finaliza compra", () => {
        cy.visit("https://www.saucedemo.com")
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('.shopping_cart_badge').should('have.text', '1')
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="firstName"]').type('Felipe')
        cy.get('[data-test="lastName"]').type('Ribeiro')
        cy.get('[data-test="postalCode"]').type('37545-000')
        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="finish"]').click()
        cy.get('.complete-header').should('have.text', 'Thank you for your order!')
    })
  })