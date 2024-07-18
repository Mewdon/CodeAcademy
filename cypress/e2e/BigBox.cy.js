describe('BigBox', () => {
    Cypress.Commands.add('loginWithUser', () => {
        cy.session('session', () => {
            cy.visit('https://bigbox.lt')
            cy.get('.header-user-info-image').click()
            cy.get('#email').type('Shant1971@rhyta.com')
            cy.get('#passwd').type('Testas123!')
            cy.get('.login-button').should('be.visible', 'have.value', 'Prisijungti').click()
        })
    })


    it.only('login', () => {
        cy.visit('https://bigbox.lt')
        cy.get('.header-user-info-image').click()
        cy.get('#email').type('Shant1971@rhyta.com')
        cy.get('#passwd').type('Testas123!')
        cy.get('.login-button').should('be.visible', 'have.value', 'Prisijungti').click()
        cy.get('.page-heading').should('include.text', 'Mano paskyra').and('be.visible')
    })

    it('add item to the cart', () => {
        cy.loginWithUser()
        cy.visit('https://bigbox.lt')
        cy.get('.toggle-menu-button').click()
        cy.get('.bigvsh').click()
        cy.get(':nth-child(1) > .subcategory-container > a > .category-preview').click()
        cy.get(':nth-child(1) > .subcategory-container > a > .category-preview').click()
        cy.get('[data-id-product="1109442"] > .product-container > .category-item-image > .image-container > .replace-2x').click().should('be.visible')
        cy.get('#buy_block').click()
        cy.get('#header > div.nav > div > div > nav > div.shopping_cart > span:nth-child(1) > div > a').click()
        cy.get('.order-detail-content-inside').should('be.visible')

    })

    it('cart', () => {
        cy.loginWithUser()
        cy.visit('https://bigbox.lt')
        cy.get('#header > div.nav > div > div > nav > div.shopping_cart > span:nth-child(1) > div > a').click()
        cy.get('.order-detail-content-inside').should('be.visible')
        cy.get('#cart-summary-next-step').click()
        cy.get('.address-next-step-block > .bb-primary-button').click()
        cy.get('#carrier-next-step').click()
        cy.get('#cart_navigation').should('be.visible')

    })
})
