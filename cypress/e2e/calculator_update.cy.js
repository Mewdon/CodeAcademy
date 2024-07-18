let arr = ['Prototype', 1, 2, 3, 4, 5, 6, 7, 8, 9];
let x = 2.1;
let y = 1;
arr.forEach((i) => {
    describe(`BUILD: ${i}`, () => {
        beforeEach(() => {
            cy.visit('https://testsheepnz.github.io/BasicCalculator');
        })
        it(`calculates ${x} + ${y}`, () => {
            cy.get('#selectBuild').select([i]);
            cy.get('#number1Field').type(x);
            cy.get('#number2Field').type(y);
            cy.get('#selectOperationDropdown').select('Add');
            cy.get('#clearButton').should('not.have.attr', 'disabled');
            cy.get('#calculateButton').click();
            cy.get('#numberAnswerField').should('have.value', x + y).and('be.visible');
        })
        it(`calculates ${x} - ${y}`, () => {
            cy.get('#selectBuild').select([i]);
            cy.get('#number1Field').type(x)
            cy.get('#number2Field').type(y)
            cy.get('#selectOperationDropdown').select('Subtract')
            cy.get('#clearButton').should('not.have.attr', 'disabled')
            cy.get('#calculateButton').click()
            cy.get('#numberAnswerField').should('have.value', x - y).and('be.visible')
        })
        it(`calculates ${x} * ${y}`, () => {
            cy.get('#selectBuild').select([i]);
            cy.get('#number1Field').type(x)
            cy.get('#number2Field').type(y)
            cy.get('#selectOperationDropdown').select('Multiply')
            cy.get('#clearButton').should('not.have.attr', 'disabled')
            cy.get('#calculateButton').click()
            cy.get('#numberAnswerField').should('have.value', x * y).and('be.visible')
        })
        it(`calculates ${x} / ${y}`, () => {
            cy.get('#selectBuild').select([i]);
            cy.get('#number1Field').type(x)
            cy.get('#number2Field').type(y)
            cy.get('#selectOperationDropdown').select('Divide')
            cy.get('#clearButton').should('not.have.attr', 'disabled')
            cy.get('#calculateButton').click()
            cy.get('#numberAnswerField').should('have.value', x / y).and('be.visible')
        })
        it(`concatenates ${x} and ${y}`, () => {
            cy.get('#selectBuild').select([i]);
            cy.get('#number1Field').type(x)
            cy.get('#number2Field').type(y)
            cy.get('#selectOperationDropdown').select('Concatenate')
            cy.get('#clearButton').should('not.have.attr', 'disabled')
            cy.get('#calculateButton').click()
            cy.get('#numberAnswerField').should('have.value', '' + x + y).and('be.visible')
        })
        it(`handles ${x} + 'A'`, () => {
            cy.get('#selectBuild').select([i]);
            cy.get('#number1Field').type(2)
            cy.get('#number2Field').type('a')
            cy.get('#selectOperationDropdown').select('Add')
            cy.get('#clearButton').should('not.have.attr', 'disabled')
            cy.get('#calculateButton').click()
            cy.get('#numberAnswerField').should('have.value', '').and('be.visible')
            cy.get('#errorMsgField').should('be.visible').and('include.text', 'Number 2 is not a number')
        })

        it(`concatenates ${x} and 'A'`, () => {
            cy.get('#selectBuild').select([i]);
            cy.get('#number1Field').type(x)
            cy.get('#number2Field').type('A')
            cy.get('#selectOperationDropdown').select('Concatenate')
            cy.get('#clearButton').should('not.have.attr', 'disabled')
            cy.get('#calculateButton').click()
            cy.get('#numberAnswerField').should('have.value', '' + x + 'A').and('be.visible')
        })
        it(`handles ${x} / 0`, () => {
            cy.get('#selectBuild').select([i]);
            cy.get('#number1Field').type(x)
            cy.get('#number2Field').type(0)
            cy.get('#selectOperationDropdown').select('Divide')
            cy.get('#clearButton').should('not.have.attr', 'disabled')
            cy.get('#calculateButton').click()
            cy.get('#numberAnswerField').should('have.value', '').and('not.be.visible')
            cy.get('#errorMsgField').should('be.visible').and('include.text', 'Divide by zero error!')
        })
    })
})

