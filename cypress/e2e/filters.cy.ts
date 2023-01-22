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

        var Current_race = []
        var New_race = []
        //Store all the race name before uncheck some filter
        cy.get('div').each(() => {
            Current_race.push(cy.get('.race-name'))
        })

        //To uncheck the Thoroughbred filter
        cy.get('[data-testid="category-filter-4a2788f8-e825-4d36-9894-efd4baf1cfae"] > [data-testid="category-filter-checkbox"]').uncheck();

        //Store the race name after unchecked the Thoroughbred
        cy.get('.item').each(() => {
            New_race.push(cy.get('.race-name'))
        })

        //Compare the value in Old
        cy.get(Current_race).should('not.equal', New_race)

        //Copy New race to current race
        Current_race == New_race

        //To uncheck the Greyhound filter
        cy.get('[data-testid="category-filter-9daef0d7-bf3c-4f50-921d-8e818c60fe61"] > [data-testid="category-filter-checkbox"]').uncheck();

        //Store the race name after unchecked the Greyhound
        cy.get('.item').each(() => {
            New_race.push(cy.get('.race-name'))
        })

        //Compare the value in Old
        cy.get(Current_race).should('not.equal', New_race)

        //Copy New race to current race
        Current_race == New_race
    })
});
