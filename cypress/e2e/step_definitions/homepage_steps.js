import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  

  Given("Open the ISTQB Exam document", () => {
    //Visitar la pagina 
    cy.visit("/");
  });

 