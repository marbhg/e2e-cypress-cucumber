import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";

Then ("the user see title Developed with HTML5, CSS3 and Javascrip on header", () => {
  cy.get('data-testid="devename"').should('have.text', 'Developed with HTML5, CSS3 and Javascrip');
}); 