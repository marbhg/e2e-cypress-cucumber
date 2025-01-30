import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  

  Given("Open the ISTQB Exam document", () => {
    //Visitar la pagina del examen 
    cy.visit("/");

    //Recargar la pagina 
    //cy.reload();

    //Borrar Cokkies NO ES NECESARIO ya cypress por defecto las borra 
    //cy.clearCookies();
  });

 