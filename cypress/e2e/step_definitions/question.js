import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";

When("the user select option {string} on question number {string}", (option, resp) => {
  //Selecciona la pregunta correcta + incorrecta + vacia 
  cy.get('[data-testid="resp1" ' + resp + '"]').select(option);
});

When("the user click on the Evaluate everything button", () => {
  //Validamos el boton para ingresar al examen  
  cy.get('[data-testid="buttonfinish"]').click();
});

When("the user should see score {string} for question {string}", (option, resp) => {
  //Validar la puntuacion de las preguntas 
  cy.get('[data-testid="resultadopregunta1"]').should('contain', option);
});

//*When("The user must see the score in green if they are approved ", () => {
//El usuario debe ver la puntuacion en verde si el examen esta aprobado 
//*});
