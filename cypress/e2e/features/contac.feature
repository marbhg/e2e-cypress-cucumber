Feature: contac 

As a student, when you enter the exam page you must register.



Scenario: Fill out the form with the empty fields
Given The user visits the ISTQB Exam page
When When the user fills in the first name " "
And the user fills in the last name " "
And the user press submit button 
Then the user should see the following error message contain "invalidform"
And validate that the exam does not appear "notbevisible"
And the registration form should "bevisible"


Scenario: Fill de form whith mandatory fields
Given The user visits the ISTQB Exam page
When the user fills in the first name "Marbelis"
And  the user fills in the last name "Hugo"
And the user press submit button 
And validate that the exam does not appear "notbevisible"
And validate contain message "Welcome"
Then validate that the exam section is displayed






