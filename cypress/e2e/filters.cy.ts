describe('Category Filters', () => {
    it('Should have all filter enabled when all the checkboxs are unchecked', () => {
        cy.visit('');
        //To uncheck all the checkbox in the application
        cy.get('[type="checkbox"]').uncheck();
        //Make sure the checkbox will be checked when last checkbox has been unchecked
        cy.get('[type="checkbox"]').should('be.checked')
    })

    it('Race name should updated after deselect filer', () => {
        cy.visit('');
    })
});
