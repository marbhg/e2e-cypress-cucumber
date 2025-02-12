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

When("the user press submit button", () => {
  //Validamos el boton para ingresar al examen  
cy.get('[data-testid="signup"]').click();
});

When("the user should see message {string}", (mensajebienveyerror) => {
  //Tiene que ser visible el mensaje de bienvenida y el mensaje de invalido  
cy.get('[data-testid="mensajebienvenida"]').should('contain', (mensajebienveyerror));
});

When("validate that the exam section is displayed", () => {
cy.get('[data-testid="examen"]').should('be.visible');
});
