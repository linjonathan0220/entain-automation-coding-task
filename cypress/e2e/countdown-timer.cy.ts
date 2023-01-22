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

    it('Should display correct time format when less than 5 mins and less than 1 mins', () => {
        cy.visit('');

        // Convert the time into sec and divide by 60 to find out how many minute left
        // Checking the minute is greater/lower than 1 or 5 mins
        // Use If else for conditional test
        // Add an accertion to verify the time format should be display
    })

    it('Should count down as expected by 1 sec each time', () => {
        cy.visit('');

        // Convert the time into sec and divide by 60 to find out how many minute left
        // Store the current time to a varible
        // Make it wait for 5 seconds
        // Compare the previous time and new time
        // Add accertion to make sure that new time has reduced 5 seconds 
    })
});
