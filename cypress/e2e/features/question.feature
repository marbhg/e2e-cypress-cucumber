Feature: Question 

As a student I want to be able to answer the exam questions.


Scenario: Examen passed
Given the user visits the ISTQB Exam page
When the user fills in the first name "Marbelis"
And  the user fills in the last name "Hugo"
And the user press submit button 
When the user selects option "c" on question number "1"  
And the user selects option "a" on question number "2"
And the user selects option "b" on question number "4"
And the user selects option "a" on question number "5"
And the user selects option "c" on question number "6"
And the user selects option "b" on question number "7"
And the user selects option "c" on question number "8"
And the user selects option "a" on question number "9"
And the user selects option "a" on question number "10"
Then the user click on the Evaluate everything button 
And the user should see score "2" for question "1"
And the user should see score "2" for question "2"
And the user should see score "0" for question "3"
And the user should see score "-1" for question "4"
And the user should see score "2" for question "5"
And the user should see score "2" for question "6"
And the user should see score "2" for question "7"
And the user should see score "-1" for question "8"
And the user should see score "2" for question "9"
And the user should see score "-1" for question "10"












