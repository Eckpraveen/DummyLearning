$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/praveen.das/eclipse-workspace/FreeCrmBddFramework/src/main/java/Features/Deals.feature");
formatter.feature({
  "line": 1,
  "name": "Deal_data creation",
  "description": "",
  "id": "deal-data-creation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "FreeCRM create a new Deal scenario",
  "description": "",
  "id": "deal-data-creation;freecrm-create-a-new-deal-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is already present on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters username and password",
  "rows": [
    {
      "cells": [
        "eckpraveen@gmail.com",
        "Pdv@1992"
      ],
      "line": 8
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user is on Homepage",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user moves to new deal page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user enters deal details- Title and Company and Probability and Amount and Commission and Stage",
  "rows": [
    {
      "cells": [
        "PNB",
        "Incop",
        "5",
        "60000",
        "10.1",
        "Prospect"
      ],
      "line": 13
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Deal_StepDefinition.User_alread_on_Login_page()"
});
formatter.result({
  "duration": 23029888300,
  "status": "passed"
});
formatter.match({
  "location": "Deal_StepDefinition.Title_check_on_LoginPage()"
});
formatter.result({
  "duration": 17225200,
  "status": "passed"
});
formatter.match({
  "location": "Deal_StepDefinition.Enter_UN_and_PWD(DataTable)"
});
formatter.result({
  "duration": 361010000,
  "status": "passed"
});
formatter.match({
  "location": "Deal_StepDefinition.Click_on_Login()"
});
formatter.result({
  "duration": 5085626900,
  "status": "passed"
});
formatter.match({
  "location": "Deal_StepDefinition.User_is_on_homePage()"
});
formatter.result({
  "duration": 11166400,
  "status": "passed"
});
formatter.match({
  "location": "Deal_StepDefinition.Move_on_New_DealPage()"
});
formatter.result({
  "duration": 13272614800,
  "status": "passed"
});
formatter.match({
  "location": "Deal_StepDefinition.User_enters_deal_deatils(DataTable)"
});
formatter.result({
  "duration": 5865532200,
  "status": "passed"
});
formatter.match({
  "location": "Deal_StepDefinition.TearDown()"
});
formatter.result({
  "duration": 166548500,
  "status": "passed"
});
});