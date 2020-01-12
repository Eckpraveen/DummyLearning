$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/praveen.das/eclipse-workspace/FreeCrmBddFramework/src/main/java/Features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is already present on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 6,
      "value": "#Then click on LOG IN button"
    }
  ],
  "line": 7,
  "name": "user enters username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on Homepage",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.User_alread_on_Login_page()"
});
formatter.result({
  "duration": 12662171700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.Title_check_on_LoginPage()"
});
formatter.result({
  "duration": 9338100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.Enter_UN_and_PWD()"
});
formatter.result({
  "duration": 286507600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.Click_on_Login()"
});
formatter.result({
  "duration": 5099076400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.User_is_on_homePage()"
});
formatter.result({
  "duration": 9716600,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003cCogmento[]CRM\u003e but was:\u003cCogmento[ ]CRM\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat stepDefinitions.LoginStepDefinition.User_is_on_homePage(LoginStepDefinition.java:57)\r\n\tat ✽.And user is on Homepage(C:/Users/praveen.das/eclipse-workspace/FreeCrmBddFramework/src/main/java/Features/Login.feature:9)\r\n",
  "status": "failed"
});
});