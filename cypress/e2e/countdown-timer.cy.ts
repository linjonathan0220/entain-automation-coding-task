describe('Countdown Timer', () => {
    it('Should remove the race once the race is began', () => {
        cy.visit('');

        let i = 0

        // Check all the race time which shouldn't contain a negative number
        // It should immediately remove it from the race list since the race has been began
        for (i = 0; i < 5; i++) {
            cy.get('div.item').children('p').eq(i).should('not.include.text', '-')
        }
    })

    it('Should display the race from less time to most time', () => {
        cy.visit('');

        let i = 0

        // Create a Array to store all the race time left
        var racetime1 = []

        // Push current all rece time to the racetime1 array
        for (i = 0; i < 5; i++) {
            racetime1.push(cy.get('div.item').children('p').eq(i))
        }

        // Compare the race time array with race time array after sorted
        cy.wrap(racetime1).should('equal', racetime1.sort())
    })

    it('Should display in Minute and Second after 5 mins', () => {
        cy.visit('');
    })

    it('Should display in second after 1 min', () => {
        cy.visit('');
    })

    it('Should count down as expected by 1 sec each time', () => {
        cy.visit('');
});
