$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("backgroundUse.feature");
formatter.feature({
  "line": 2,
  "name": "Register Test",
  "description": "",
  "id": "register-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@RegressionTest"
    }
  ]
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Navigate to Website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "click Sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "type email \"berkankorkmazz0@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "click on Create an Account button",
  "keyword": "And "
});
formatter.match({
  "location": "register_Steps.navigateToWebsite()"
});
formatter.result({
  "duration": 12578269000,
  "status": "passed"
});
formatter.match({
  "location": "register_Steps.clickSignInButton()"
});
formatter.result({
  "duration": 3667017400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "berkankorkmazz0@gmail.com",
      "offset": 12
    }
  ],
  "location": "register_Steps.typeEmail(String)"
});
formatter.result({
  "duration": 297561600,
  "status": "passed"
});
formatter.match({
  "location": "register_Steps.clickOnCreateAnAccountButton()"
});
formatter.result({
  "duration": 188878200,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "ilk senaryo",
  "description": "",
  "id": "register-test;ilk-senaryo",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "type firstname \"berkan\" and lastname \"korkmaz\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "berkan",
      "offset": 16
    },
    {
      "val": "korkmaz",
      "offset": 38
    }
  ],
  "location": "register_Steps.typeFirstnameAndLastname(String,String)"
});
formatter.result({
  "duration": 3027717900,
  "status": "passed"
});
formatter.after({
  "duration": 2771119200,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Navigate to Website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "click Sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "type email \"berkankorkmazz0@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "click on Create an Account button",
  "keyword": "And "
});
formatter.match({
  "location": "register_Steps.navigateToWebsite()"
});
formatter.result({
  "duration": 9865500500,
  "status": "passed"
});
formatter.match({
  "location": "register_Steps.clickSignInButton()"
});
formatter.result({
  "duration": 2309719400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "berkankorkmazz0@gmail.com",
      "offset": 12
    }
  ],
  "location": "register_Steps.typeEmail(String)"
});
formatter.result({
  "duration": 262548100,
  "status": "passed"
});
formatter.match({
  "location": "register_Steps.clickOnCreateAnAccountButton()"
});
formatter.result({
  "duration": 303021100,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "ikinci senaryo",
  "description": "",
  "id": "register-test;ikinci-senaryo",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "type Company \"DELL\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "type address \"Pendik\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "DELL",
      "offset": 14
    }
  ],
  "location": "register_Steps.typeCompany(String)"
});
formatter.result({
  "duration": 1591421900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pendik",
      "offset": 14
    }
  ],
  "location": "register_Steps.typeAddress(String)"
});
formatter.result({
  "duration": 274596200,
  "status": "passed"
});
formatter.after({
  "duration": 2673595400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "",
  "description": "",
  "id": "register-test;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "type firstname \"\u003cfirstname\u003e\" and lastname \"\u003clastname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "type password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "type Company \"\u003ccompany\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "type address \"\u003caddress\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "register-test;;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "password",
        "company",
        "address"
      ],
      "line": 23,
      "id": "register-test;;;1"
    },
    {
      "cells": [
        "ahmet",
        "sungur",
        "ahmet123",
        "DELL",
        "USA"
      ],
      "line": 24,
      "id": "register-test;;;2"
    },
    {
      "cells": [
        "ayse",
        "sungur",
        "ayse123",
        "DELL",
        "USA"
      ],
      "line": 25,
      "id": "register-test;;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Navigate to Website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "click Sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "type email \"berkankorkmazz0@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "click on Create an Account button",
  "keyword": "And "
});
formatter.match({
  "location": "register_Steps.navigateToWebsite()"
});
formatter.result({
  "duration": 10273453400,
  "status": "passed"
});
formatter.match({
  "location": "register_Steps.clickSignInButton()"
});
formatter.result({
  "duration": 1634537800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "berkankorkmazz0@gmail.com",
      "offset": 12
    }
  ],
  "location": "register_Steps.typeEmail(String)"
});
formatter.result({
  "duration": 1045621000,
  "status": "passed"
});
formatter.match({
  "location": "register_Steps.clickOnCreateAnAccountButton()"
});
formatter.result({
  "duration": 234737800,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "",
  "description": "",
  "id": "register-test;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "type firstname \"ahmet\" and lastname \"sungur\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "type password \"ahmet123\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "type Company \"DELL\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "type address \"USA\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "ahmet",
      "offset": 16
    },
    {
      "val": "sungur",
      "offset": 37
    }
  ],
  "location": "register_Steps.typeFirstnameAndLastname(String,String)"
});
formatter.result({
  "duration": 1685558300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ahmet123",
      "offset": 15
    }
  ],
  "location": "register_Steps.typePassword(String)"
});
formatter.result({
  "duration": 371687300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DELL",
      "offset": 14
    }
  ],
  "location": "register_Steps.typeCompany(String)"
});
formatter.result({
  "duration": 220883300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "USA",
      "offset": 14
    }
  ],
  "location": "register_Steps.typeAddress(String)"
});
formatter.result({
  "duration": 249436100,
  "status": "passed"
});
formatter.after({
  "duration": 2843047600,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Navigate to Website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "click Sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "type email \"berkankorkmazz0@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "click on Create an Account button",
  "keyword": "And "
});
formatter.match({
  "location": "register_Steps.navigateToWebsite()"
});
formatter.result({
  "duration": 11195394000,
  "status": "passed"
});
formatter.match({
  "location": "register_Steps.clickSignInButton()"
});
formatter.result({
  "duration": 1926042800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "berkankorkmazz0@gmail.com",
      "offset": 12
    }
  ],
  "location": "register_Steps.typeEmail(String)"
});
formatter.result({
  "duration": 1076853800,
  "status": "passed"
});
formatter.match({
  "location": "register_Steps.clickOnCreateAnAccountButton()"
});
formatter.result({
  "duration": 190514400,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "",
  "description": "",
  "id": "register-test;;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "type firstname \"ayse\" and lastname \"sungur\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "type password \"ayse123\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "type Company \"DELL\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "type address \"USA\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "ayse",
      "offset": 16
    },
    {
      "val": "sungur",
      "offset": 36
    }
  ],
  "location": "register_Steps.typeFirstnameAndLastname(String,String)"
});
formatter.result({
  "duration": 1785734100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ayse123",
      "offset": 15
    }
  ],
  "location": "register_Steps.typePassword(String)"
});
formatter.result({
  "duration": 452071700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DELL",
      "offset": 14
    }
  ],
  "location": "register_Steps.typeCompany(String)"
});
formatter.result({
  "duration": 232322700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "USA",
      "offset": 14
    }
  ],
  "location": "register_Steps.typeAddress(String)"
});
formatter.result({
  "duration": 293903100,
  "status": "passed"
});
formatter.after({
  "duration": 2694448900,
  "status": "passed"
});
});