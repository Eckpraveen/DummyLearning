Feature: Free CRM Login Feature

Scenario: Free CRM Login Test Scenario

Given User is already present on login page
When title of login page is Free CRM
#Then click on LOG IN button 
Then user enters username and password    
Then user clicks on Login button
And user is on Homepage

Scenario: User create new contact

Given USer is already on HomePage
When User mouse Hover on contact link
Then User click on New Contact Link
Then User enters FN and LN
Then User click on save button
Then Verify new Contact is created