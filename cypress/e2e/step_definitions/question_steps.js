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
});

Then("the user should see final score color green", () => {
  cy.get('[data-testid="resultado-finales"]').should('have.css', 'color', 'rgb(0, 128, 0)');
});


Then("the user should see final score {string}",() => {
  //El susuario debe ver el numero correcto de preguntas contestadas correctamente 
  cy.get('[data-testid="resultado-finales"]').should('contain', '13');
});  

Then("the user should see final score color red", () => {
  //El susuario debe ver el msnaje en rojo si esta suspenso
  cy.get('[data-testid="resultado-finales"]').should ( 'have.css' , 'color' , 'rgba(0, 0, 0, 0.87)' )
}); 
