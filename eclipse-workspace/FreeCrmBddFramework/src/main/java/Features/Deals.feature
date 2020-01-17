Feature: Deal_data creation

Scenario: FreeCRM create a new Deal scenario

Given User is already present on login page
When title of login page is Free CRM
Then user enters username and password   
| eckpraveen@gmail.com | Pdv@1992 |
Then user clicks on Login button
And user is on Homepage
Then user moves to new deal page
Then user enters deal details- Title and Company and Probability and Amount and Commission and Stage
| PNB | Incop | 5 | 60000 | 10.1 | Prospect |
Then user close the browser