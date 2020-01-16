Feature: Free CRM Create contacts 

Scenario Outline: Free CRM Create a new contact scenario 

#With example keyword ----
	Given User is already present on login page 
	When title of login page is Free CRM 
	Then user enters "<username>" and "<password>" 
	Then user clicks on Login button 
	And user is on Homepage 
	Then user click on Contacts and Create new contacts 
	Then user enter "<firstname>" and "<lastname>" and "<company>" and "<email>" and "<city>" 
	Then user close the browser 
	
	Examples: 
		|username             |password |firstname |lastname |company |email |city |
		|eckpraveen@gmail.com |Pdv@1992 |Akash |Kumar |Incedo |Akash.k@incedoinc.com |Gurgaon |	
		|eckpraveen@gmail.com |Pdv@1992 |Gaurav |Khatri |Indigo |gaurav.k@incedoinc.com |Noida |
		|eckpraveen@gmail.com |Pdv@1992 |Dave |Rishi |Incedo |dr1@incedoinc.com |Delhi |