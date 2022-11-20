/// <reference types='Cypress' />

describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should display header text', () => {
    cy.contains('h1', 'ToDo APP')
  })

  it('should be able to create a new task', () => {
    const newTask = 'Test new task'

    cy.get('#newTodo').should('be.visible')
    cy.get('#newTodo').type(`${newTask}{enter}`)

    cy.get('input').last().should('have.value', newTask)
  })

  it('should be able to check off an task as completed', () => {
    const checkOffTask = 'Test check off task'

    cy.get('#newTodo').should('be.visible')
    cy.get('#newTodo').type(`${checkOffTask}{enter}`)
    cy.get('input').last().should('have.value', checkOffTask)

    cy.get('.form-input').last().find('.icon--check').click()
  })

  it('should be able to delete an task', () => {
    const deleteTask = 'Test delete task'

    cy.get('#newTodo').should('be.visible')
    cy.get('#newTodo').type(`${deleteTask}{enter}`)
    cy.get('input').last().should('have.value', deleteTask)

    cy.get('.form-input').last().find('.icon--delete').click()
  })

  it('should be able to filter for uncompleted tasks', () => {
    const checkOffTask = 'Test check off task'

    cy.get('#newTodo').should('be.visible')
    cy.get('#newTodo').type(`${checkOffTask}{enter}`)
    cy.get('input').last().should('have.value', checkOffTask)

    cy.get('.form-input').last().find('.icon--check').click()

    cy.get('.options').within(() => {
      cy.contains('span', 'Exibir apenas tarefas em aberto.')
      cy.get('.only-open').check()
    })

    cy.get('.icon').should('not.have.class', 'icon--done')
  })
})
