/// <reference = cypress>

describe("Criação, registro e login", () => {
    it("criacao de usuario com sucesso", () => {
      cy.visit("https://globalsqa.com/angularJs-protractor/registration-login-example/#/login")
      cy.get('.btn-link').click()
      cy.get('#firstName').type('felipe')
      cy.get('#Text1').type('ribeiro')
      cy.get('#username').type('felipe')
      cy.get('#password').type('felipe')
      cy.get('.btn-primary').click()
      cy.get('.ng-binding').should('have.text', 'Registration successful')
    })
  
    it("criacao de usuario com falha", () => {
      cy.visit("https://globalsqa.com/angularJs-protractor/registration-login-example/#/login")
      cy.get('.btn-link').click()
      cy.get('#firstName').type('felipe')
      cy.get('#Text1').type('ribeiro')
      cy.get('#username').type('felipe')
      cy.get('.btn-primary').should('be.disabled')
    })
  
    it("login com sucesso", () => {
      let infos = createUser()
  
      cy.visit("https://globalsqa.com/angularJs-protractor/registration-login-example/#/login")
      cy.get('#username').type(infos[0])
      cy.get('#password').type(infos[1])
      cy.get('.btn-primary').click()
      cy.get('h1.ng-binding').should('contain.text', infos[0])
    })

    //Atividade
    it("login, deletar e tentar novamente com falha", () => {
      let infos = createUser()
  
      cy.visit("https://globalsqa.com/angularJs-protractor/registration-login-example/#/login")
      cy.get('#username').type(infos[0])
      cy.get('#password').type(infos[1])
      cy.get('.btn-primary').click()
      cy.get('h1.ng-binding').should('contain.text', infos[0])
      cy.get('.ng-binding > a').click()
      cy.get('.btn').click()
      cy.get('#username').type(infos[0])
      cy.get('#password').type(infos[1])
      cy.get('.btn-primary').click()
      cy.get('.ng-binding').should('have.text', 'Username or password is incorrect')

    })
  })
  
  function createUser() {
    let hour = new Date().getHours().toString()
    let minute = new Date().getMinutes().toString()
    let second = new Date().getSeconds().toString()
    let id = hour + minute + second + "id"
    let password = hour + minute + second + "password"
    let infos = [id, password]
  
    cy.visit("https://globalsqa.com/angularJs-protractor/registration-login-example/#/login")
    cy.get('.btn-link').click()
    cy.get('#firstName').type(id)
    cy.get('#Text1').type(id)
    cy.get('#username').type(id)
    cy.get('#password').type(password)
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should('have.text', 'Registration successful')
  
    return infos
  }