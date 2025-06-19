/// <reference = cypress>
function generateEmails() {
    let qtd = 2
    let emails = []

    for (let i = 0; i < qtd; i++) {
        let hour = new Date().getHours().toString()
        let minute = new Date().getMinutes().toString()
        let second = new Date().getSeconds().toString()
        let email = hour + minute + second + i + "@teste.com"
        emails.push(email)
    }

    return emails
}

describe("Alunos", () => {

    beforeEach(() => {
      cy.visit("https://confianopai.com/adm/novo-usuario")
        cy.get(':nth-child(2) > .sc-ktwOfi').type('Dimitri@')
        cy.get(':nth-child(3) > .sc-ktwOfi').type('123')
        cy.get('.sc-csKJxZ').click()
        cy.get('[href="/adm/novo-usuario"]').click()
        cy.get('.sc-dsAqUS').select('Aluno')
    });

    let emails = generateEmails()

    it("1 Carrega página novo aluno", () => {
        cy.get('.sc-dsAqUS').should('have.value', 'aluno')
        cy.get(':nth-child(1) > .sc-bqOYya > .sc-gHjVMF').should('be.visible')
        cy.get(':nth-child(2) > .sc-bqOYya > .sc-gHjVMF').should('be.visible')
        cy.get(':nth-child(3) > .sc-bqOYya > .sc-gHjVMF').should('be.visible')
        cy.get(':nth-child(4) > .sc-irLvIq > .sc-csKJxZ').should('be.visible')
    })

    it("2 Cadastra novo aluno e limpa formulario", () => {
        cy.get(':nth-child(1) > .sc-bqOYya > .sc-gHjVMF').type('teste')
        cy.get(':nth-child(2) > .sc-bqOYya > .sc-gHjVMF').type(emails[0])
        cy.get(':nth-child(3) > .sc-bqOYya > .sc-gHjVMF').type('teste')
        cy.get(':nth-child(4) > .sc-irLvIq > .sc-csKJxZ').click()
        cy.get('.Toastify__toast-body > :nth-child(2)').should('have.text', 'Usuário criado com sucesso!')

        cy.get(':nth-child(1) > .sc-bqOYya > .sc-gHjVMF').should('have.text', '')
        cy.get(':nth-child(2) > .sc-bqOYya > .sc-gHjVMF').should('have.text', '')
        cy.get(':nth-child(3) > .sc-bqOYya > .sc-gHjVMF').should('have.text', '')
    })

    it("3 Nega cadastrar novo aluno com email ja cadastrado antes e limpa formulario", () => {
        cy.get(':nth-child(1) > .sc-bqOYya > .sc-gHjVMF').type('teste')
        cy.get(':nth-child(2) > .sc-bqOYya > .sc-gHjVMF').type(emails[0])
        cy.get(':nth-child(3) > .sc-bqOYya > .sc-gHjVMF').type('teste')
        cy.get(':nth-child(4) > .sc-irLvIq > .sc-csKJxZ').click()
        cy.get('.Toastify__toast-body').should('have.text', 'Falha ao criar usuário.')

        cy.get(':nth-child(1) > .sc-bqOYya > .sc-gHjVMF').should('have.text', '')
        cy.get(':nth-child(2) > .sc-bqOYya > .sc-gHjVMF').should('have.text', '')
        cy.get(':nth-child(3) > .sc-bqOYya > .sc-gHjVMF').should('have.text', '')
    })

    it("4 Nega cadastrar novo aluno com email invalido (sem @xxx.com)", () => {
        cy.get(':nth-child(1) > .sc-bqOYya > .sc-gHjVMF').type('teste')
        cy.get(':nth-child(2) > .sc-bqOYya > .sc-gHjVMF').type('teste')
        cy.get(':nth-child(3) > .sc-bqOYya > .sc-gHjVMF').type('teste')
        cy.get(':nth-child(4) > .sc-irLvIq > .sc-csKJxZ').click()
        cy.get('.Toastify__toast-body > :nth-child(1)').should('be.visible')
    })

    it("5 Nega cadastrar novo aluno sem nome", () => {
        cy.get(':nth-child(2) > .sc-bqOYya > .sc-gHjVMF').type(emails[1])
        cy.get(':nth-child(3) > .sc-bqOYya > .sc-gHjVMF').type('teste')
        cy.get(':nth-child(4) > .sc-irLvIq > .sc-csKJxZ').click()
        cy.get('.Toastify__toast-body > :nth-child(2)').should('not.exist')
    })

    it("6 Nega cadastrar novo aluno sem email", () => {
        cy.get(':nth-child(1) > .sc-bqOYya > .sc-gHjVMF').type('teste')
        cy.get(':nth-child(3) > .sc-bqOYya > .sc-gHjVMF').type('teste')
        cy.get(':nth-child(4) > .sc-irLvIq > .sc-csKJxZ').click()
        cy.get('.Toastify__toast-body > :nth-child(2)').should('not.exist')
    })

    it("7 Nega cadastrar novo aluno sem senha", () => {
        cy.get(':nth-child(1) > .sc-bqOYya > .sc-gHjVMF').type('teste')
        cy.get(':nth-child(2) > .sc-bqOYya > .sc-gHjVMF').type(emails[1])
        cy.get(':nth-child(4) > .sc-irLvIq > .sc-csKJxZ').click()
        cy.get('.Toastify__toast-body > :nth-child(2)').should('not.exist')
    })

    it("8 Cadastra novo aluno com email ainda não cadastrado", () => {
        cy.get(':nth-child(1) > .sc-bqOYya > .sc-gHjVMF').type('teste1')
        cy.get(':nth-child(2) > .sc-bqOYya > .sc-gHjVMF').type(emails[1])
        cy.get(':nth-child(3) > .sc-bqOYya > .sc-gHjVMF').type('teste')
        cy.get(':nth-child(4) > .sc-irLvIq > .sc-csKJxZ').click()
        cy.get('.Toastify__toast-body > :nth-child(2)').should('have.text', 'Usuário criado com sucesso!')
    })
  })