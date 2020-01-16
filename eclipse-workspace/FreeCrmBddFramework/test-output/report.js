$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/praveen.das/eclipse-workspace/FreeCrmBddFramework/src/main/java/Features/CreateContact.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Create contacts",
  "description": "",
  "id": "free-crm-create-contacts",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Free CRM Create a new contact scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "comments": [
    {
      "line": 5,
      "value": "#With example keyword ----"
    }
  ],
  "line": 6,
  "name": "User is already present on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
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
  "name": "user click on Contacts and Create new contacts",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user enter \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003ccompany\u003e\" and \"\u003cemail\u003e\" and \"\u003ccity\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "company",
        "email",
        "city"
      ],
      "line": 16,
      "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;1"
    },
    {
      "cells": [
        "eckpraveen@gmail.com",
        "Pdv@1992",
        "Akash",
        "Kumar",
        "Incedo",
        "Akash.k@incedoinc.com",
        "Gurgaon"
      ],
      "line": 17,
      "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;2"
    },
    {
      "cells": [
        "eckpraveen@gmail.com",
        "Pdv@1992",
        "Gaurav",
        "Khatri",
        "Indigo",
        "gaurav.k@incedoinc.com",
        "Noida"
      ],
      "line": 18,
      "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;3"
    },
    {
      "cells": [
        "eckpraveen@gmail.com",
        "Pdv@1992",
        "Dave",
        "Rishi",
        "Incedo",
        "dr1@incedoinc.com",
        "Delhi"
      ],
      "line": 19,
      "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Free CRM Create a new contact scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "comments": [
    {
      "line": 5,
      "value": "#With example keyword ----"
    }
  ],
  "line": 6,
  "name": "User is already present on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters \"eckpraveen@gmail.com\" and \"Pdv@1992\"",
  "matchedColumns": [
    0,
    1
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
  "name": "user click on Contacts and Create new contacts",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user enter \"Akash\" and \"Kumar\" and \"Incedo\" and \"Akash.k@incedoinc.com\" and \"Gurgaon\"",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.User_alread_on_Login_page()"
});
formatter.result({
  "duration": 19356127500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.Title_check_on_LoginPage()"
});
formatter.result({
  "duration": 12258800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "eckpraveen@gmail.com",
      "offset": 13
    },
    {
      "val": "Pdv@1992",
      "offset": 40
    }
  ],
  "location": "LoginStepDefinition.Enter_UN_and_PWD(String,String)"
});
formatter.result({
  "duration": 336468400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.Click_on_Login()"
});
formatter.result({
  "duration": 5094309400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.User_is_on_homePage()"
});
formatter.result({
  "duration": 9253800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.Move_on_create_contact()"
});
formatter.result({
  "duration": 4364171600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Akash",
      "offset": 12
    },
    {
      "val": "Kumar",
      "offset": 24
    },
    {
      "val": "Incedo",
      "offset": 36
    },
    {
      "val": "Akash.k@incedoinc.com",
      "offset": 49
    },
    {
      "val": "Gurgaon",
      "offset": 77
    }
  ],
  "location": "LoginStepDefinition.Enter_User_deatils(String,String,String,String,String)"
});
formatter.result({
  "duration": 19026347200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.TearDown()"
});
formatter.result({
  "duration": 428798000,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Free CRM Create a new contact scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "comments": [
    {
      "line": 5,
      "value": "#With example keyword ----"
    }
  ],
  "line": 6,
  "name": "User is already present on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters \"eckpraveen@gmail.com\" and \"Pdv@1992\"",
  "matchedColumns": [
    0,
    1
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
  "name": "user click on Contacts and Create new contacts",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user enter \"Gaurav\" and \"Khatri\" and \"Indigo\" and \"gaurav.k@incedoinc.com\" and \"Noida\"",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.User_alread_on_Login_page()"
});
formatter.result({
  "duration": 18895027000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.Title_check_on_LoginPage()"
});
formatter.result({
  "duration": 8511300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "eckpraveen@gmail.com",
      "offset": 13
    },
    {
      "val": "Pdv@1992",
      "offset": 40
    }
  ],
  "location": "LoginStepDefinition.Enter_UN_and_PWD(String,String)"
});
formatter.result({
  "duration": 387127900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.Click_on_Login()"
});
formatter.result({
  "duration": 5137210400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.User_is_on_homePage()"
});
formatter.result({
  "duration": 10356500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.Move_on_create_contact()"
});
formatter.result({
  "duration": 5180671900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gaurav",
      "offset": 12
    },
    {
      "val": "Khatri",
      "offset": 25
    },
    {
      "val": "Indigo",
      "offset": 38
    },
    {
      "val": "gaurav.k@incedoinc.com",
      "offset": 51
    },
    {
      "val": "Noida",
      "offset": 80
    }
  ],
  "location": "LoginStepDefinition.Enter_User_deatils(String,String,String,String,String)"
});
formatter.result({
  "duration": 19095706600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.TearDown()"
});
formatter.result({
  "duration": 332000700,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Free CRM Create a new contact scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "comments": [
    {
      "line": 5,
      "value": "#With example keyword ----"
    }
  ],
  "line": 6,
  "name": "User is already present on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters \"eckpraveen@gmail.com\" and \"Pdv@1992\"",
  "matchedColumns": [
    0,
    1
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
  "name": "user click on Contacts and Create new contacts",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user enter \"Dave\" and \"Rishi\" and \"Incedo\" and \"dr1@incedoinc.com\" and \"Delhi\"",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.User_alread_on_Login_page()"
});
formatter.result({
  "duration": 22684977300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.Title_check_on_LoginPage()"
});
formatter.result({
  "duration": 14315300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "eckpraveen@gmail.com",
      "offset": 13
    },
    {
      "val": "Pdv@1992",
      "offset": 40
    }
  ],
  "location": "LoginStepDefinition.Enter_UN_and_PWD(String,String)"
});
formatter.result({
  "duration": 517462100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.Click_on_Login()"
});
formatter.result({
  "duration": 5078854600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.User_is_on_homePage()"
});
formatter.result({
  "duration": 12072100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.Move_on_create_contact()"
});
formatter.result({
  "duration": 5174111800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dave",
      "offset": 12
    },
    {
      "val": "Rishi",
      "offset": 23
    },
    {
      "val": "Incedo",
      "offset": 35
    },
    {
      "val": "dr1@incedoinc.com",
      "offset": 48
    },
    {
      "val": "Delhi",
      "offset": 72
    }
  ],
  "location": "LoginStepDefinition.Enter_User_deatils(String,String,String,String,String)"
});
formatter.result({
  "duration": 19045056800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.TearDown()"
});
formatter.result({
  "duration": 346427400,
  "status": "passed"
});
});