import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";

When("the user selects option {string} on question number {string}", (option, questionNumber) => {
  cy.get('[data-testid="resp${questionNumber}"]').select(option);
  cy.get('[data-testid="resp${questionNumber}"]').should('have.value', option);

  cy.get('[data-testid="resp${questionNumber}"] option:selected').should('have.text', getOptionText(option));

  cy.get('[data-testid="resultadopregunta${questionNumber}"]').should('be.visible');
  // ... aserciones específicas para el resultado de la pregunta
});
function getOptionText(optionValue) {
  // ... (misma función que antes)
}

Then("the user click on the Evaluate everything button", () => {
  //Validamos el boton para ingresar al examen  
  cy.get('[data-testid="buttonfinish"]').click();
});

When("the user should see score {string} for question {string}", (option, resp1) => {
  //Validar la puntuacion de las preguntas 
cy.get('[data-testid="resultadopregunta1" ' + resp1 + '"]').should('contains', option);
});

Then("The user must see the score in green if they are approved ", () => {
//El usuario debe ver la puntuacion en verde si el examen esta aprobado 
});
