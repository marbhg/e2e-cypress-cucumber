
Feature: Question 

As a student I want to be able to answer the exam questions.


Scenario: Examen passed
Given Answer the first question
When the user select answer "correct" for question "1"
When the user select answer "correct" for question "2"
When the user select answer "correct" for question "3"
When the user select answer "correct" for question "4"
When the user select answer "correct" for question "5"
When the user select answer "correct" for question "6"
When the user select answer "correct" for question "7"
When the user select answer "correct" for question "8"
When the user select answer "correct" for question "9"
When the user select answer "correct" for question "10"
And the user click on the Evaluate everything button 
Then the user should see score "2" for question "1"
Then the user should see score "2" for question "1"
Then the user should see score "2" for question "1"
Then the user should see score "2" for question "1"
Then the user should see score "2" for question "1"
Then the user should see score "2" for question "1"





