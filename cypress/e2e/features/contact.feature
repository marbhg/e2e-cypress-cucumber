
Feature: contact 

As a student, when you enter the exam page you must register.


Scenario: Fill de form whith mandatory fields
Given the user visits the ISTQB Exam page
When the user fills in the first name "Marbelis"
And  the user fills in the last name "Hugo"
And the user press submit button 
And the user should see message "WELCOME MARBELIS HUGO"
Then validate that the exam section is displayed


Scenario: Fill out the form with the empty fields
Given the user visits the ISTQB Exam page
And the user press submit button 
Then the user should see message "Invalid form"







