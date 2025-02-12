import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";

When("the user selects option {string} on question number {string}", (option, questionnumber) => {
  cy.get('[data-testid="resp' + questionnumber + '"]').select(option);
});

Then("the user click on the Evaluate everything button", () => {
  //Validamos el boton para ingresar al examen  
  cy.get('[data-testid="buttonfinish"]').click();
});

When("the user should see score {string} for question {string}", (option, questionnumber) => {
  //Validar la puntuacion de las preguntas 
  cy.get('[data-testid="resultadopregunta' + questionnumber + '"]').should('exist').should('contain', option);
  cy.get('#grademessage10').should('exist').should('be.visible').should('contain', '0');
});

Then("The user must see the score in {string} if they are approved ", (coloresultado) => {
  //El susuario debe ver el msnaje en verde si esta aprovado y en rojo si esta suspenso 
  cy.get('[data-testid="finishresults' + coloresultado + '"]').should ( 'have.css' , 'color' , 'rgba(0, 0, 0, 0.87)' )
});  
