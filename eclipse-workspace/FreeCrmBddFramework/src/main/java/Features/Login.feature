Feature: Free CRM Login Feature

#Scenario: Free CRM Login Test Scenario
#Without example keyword ----
#Given User is already present on login page
#When title of login page is Free CRM
#Then user enters "eckpraveen@gmail.com" and "Pdv@1992"    
#Then user clicks on Login button
#And user is on Homepage

Scenario Outline: Free CRM Login Test Scenario

#With example keyword ----
Given User is already present on login page
When title of login page is Free CRM
Then user enters "<username>" and "<password>"    
Then user clicks on Login button
And user is on Homepage
Examples:

     | username | password |
     | eckpraveen@gmail.com | Pdv@1992 |
     | naveenk | test@123 |
#Any number of test data can be created here. I have used 2







#Scenario: User create new contact

#Given USer is already on HomePage
#When User mouse Hover on contact link
#Then User click on New Contact Link
#Then User enters FN and LN
#Then User click on save button
#Then Verify new Contact is created
#Then Close the Browser