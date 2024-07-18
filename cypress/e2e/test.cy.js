describe('template spec', () => {

    it('search microsoft word sheet with elements', () => {
        cy.visit('https://duckduckgo.com')
        cy.contains('Trusted by tens of millions worldwide!')
        cy.get('#searchbox_input').type('Microsoft Word Cheat Sheet{enter}')
        cy.get('.c-base__title').should('be.visible').and('have.text', 'Microsoft Word 2010')
        cy.get('.feedback-btn__send').click()
        cy.get('.feedback-btn__icon--love').click()
        cy.get('.js-feedback-dropdown').select(13)
        cy.get('.frm__text').type('This is the Test')
        cy.get('[data-testid="feedback-form-submit"]').should('be.visible').and('not.have.class', 'disable')
    })
    it('search stopwatch and stop then 1:11', () => {
        cy.visit('https://duckduckgo.com')
        cy.contains('Trusted by tens of millions worldwide!')
        cy.get('#searchbox_input').type('stopwatch{enter}')
        cy.get('.clearfix > :nth-child(1)').should('be.visible')
        cy.get('.start').click()
        cy.wait(1110)
        cy.get('.stop').click({force: true})
    })
    it('search duckduckgo about', () => {
        cy.visit('https://duckduckgo.com')
        cy.contains('Trusted by tens of millions worldwide!')
        cy.get('#searchbox_input').type('shorten duckduckgo.com/about{enter}')
        cy.get('#shorten-url').should('have.value', 'https://is.gd/OnnE8s')
    })
    it('search wiki', () => {
        cy.visit('https://duckduckgo.com')
        cy.contains('Trusted by tens of millions worldwide!')
        cy.get('#searchbox_input').type('!wiki{enter}')
        cy.origin('https://en.wikipedia.org', () => {
            cy.title('Wikipedia')
        })
    })
    it('generate 8 char password', () => {
        cy.visit('https://duckduckgo.com')
        cy.contains('Trusted by tens of millions worldwide!')
        cy.get('#searchbox_input').type('generate password 8 characters{enter}')
        cy.get('.c-base__title').invoke('text').its('length').should('eq', 8);
    })

    it('generate 32 char password', () => {
        cy.visit('https://duckduckgo.com')
        cy.contains('Trusted by tens of millions worldwide!')
        cy.get('#searchbox_input').type('generate password 32 characters{enter}')
        cy.get('.c-base__title').invoke('text').its('length').should('eq', 32)
    })
    it('generate 64 char password', () => {
        cy.visit('https://duckduckgo.com')
        cy.contains('Trusted by tens of millions worldwide!')
        cy.get('#searchbox_input').type('generate password 64 characters{enter}')
        cy.get('.c-base__title').invoke('text').its('length').should('eq', 64);
    })
})



