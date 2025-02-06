import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";

When("the user select option {string} on question number {string}", (option, resp) => {
  cy.get('[data-testid="resp1" ' + resp + '"]').select(option);
});
When("the user click on the Evaluate everything button", () => {
  //Validamos el boton para ingresar al examen  
  cy.get('[data-testid="buttonfinish"]').click();
});


When("the user should see score {string} for question {string}", (option, resp) => {
  cy.get('[data-testid="resultadopregunta1" ' + resp + '"]').should('contain', option);
});