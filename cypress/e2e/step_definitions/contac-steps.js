import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";

When("the user fills in the first name {string}", (name) => {
  //Obtenemos el elemento nombre y lo limpiamos (borramos el contenido si hay algo escrito)
  cy.get('[data-testid="name"]').clear();
  //Rellenamos el campo name 
  cy.get('[data-testid="name"]').type(name);
});

When("the user fills in the last name {string}", (lastname) => {
  //Obtenemos el elemento nombre y lo limpiamos (borramos el contenido si hay algo escrito)
  cy.get('[data-testid="last"]').clear();
  //Rellenamos el campo name 
  cy.get('[data-testid="last"]').type(lastname);
});



