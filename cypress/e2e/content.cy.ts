import { RACING_CATEGORIES } from "../config/constants";

describe('Page Content', () => {
  it('Should correctly display page title', () => {
    cy.visit('');

    cy.get('[data-testid=page-title]').contains('Next To Go Races').and('be.visible');
  });

  it('Should have all filters checked by default', () => {
    cy.visit('');

    cy.get('[data-testid=category-filters]').within(() => {
      RACING_CATEGORIES.forEach((category) => {
        cy.get(`[data-testid=category-filter-${category.categoryId}]`).within(() => {
          cy.get('[data-testid=category-filter-label]').contains(category.name).and('be.visible');
          cy.get('[data-testid=category-filter-checkbox]').should('be.checked');
        });
      })
    });
  })

  it('Should correctly disable and enable each filter', () => {
      cy.visit('');

      cy.get('[data-testid=category-filters]').within(() => {
          RACING_CATEGORIES.forEach((category) => {
              cy.get(`[data-testid=category-filter-${category.categoryId}]`).within(() => {
                  cy.get('[data-testid=category-filter-checkbox]').uncheck();
                  cy.get('[data-testid=category-filter-checkbox]').should('not.be.checked');
                  cy.get('[data-testid=category-filter-checkbox]').check();
                  cy.get('[data-testid=category-filter-checkbox]').should('be.checked');
              });
          })
      });
  })
});
