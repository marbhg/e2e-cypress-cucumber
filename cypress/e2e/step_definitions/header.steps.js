import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";


When("the user see title ISTQB® Online Exam on header", () => {
  //Verificamos que el elemento del texto es correcto 
  cy.get('[data-testid="headername"]').should('have.text', 'ISTQB® Online Exam');

});

Then ("the user title contain Developed with HTML5, CSS3 and Javascript! on header", () => {
  //Obtenemos el elemento del titulo y comprueba que contiene el texto
  cy.get('[data-testid="headertitle"]').should('contain', 'Developed with HTML5, CSS3 and Javascript!');
});

