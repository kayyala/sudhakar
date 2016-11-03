$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("HotelManagement.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel Booking Platform",
  "description": "Add/Remove entries in the platform",
  "id": "hotel-booking-platform",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Create a new entry",
  "description": "",
  "id": "hotel-booking-platform;create-a-new-entry",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am navigate to homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on login button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I login with user \"admin\" and password \"password\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "The admin page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I create new entry \"\u003cHotelname\u003e\",\"\u003cAdress\u003e\",\"\u003cOwner\u003e\",\"\u003cPhonenumber\u003e\" and \"\u003cEmail\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I verify entry \"\u003cHotelname\u003e\",\"\u003cAdress\u003e\",\"\u003cOwner\u003e\",\"\u003cPhonenumber\u003e\" and \"\u003cEmail\u003e\" in page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I logout of console",
  "keyword": "And "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "hotel-booking-platform;create-a-new-entry;",
  "rows": [
    {
      "cells": [
        "Hotelname",
        "Adress",
        "Owner",
        "Phonenumber",
        "Email"
      ],
      "line": 17,
      "id": "hotel-booking-platform;create-a-new-entry;;1"
    },
    {
      "cells": [
        "TEST1_uniqueValue",
        "london",
        "jhon",
        "07845534236",
        "jhon@gmail.com"
      ],
      "line": 18,
      "id": "hotel-booking-platform;create-a-new-entry;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8184167371,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Create a new entry",
  "description": "",
  "id": "hotel-booking-platform;create-a-new-entry;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am navigate to homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on login button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I login with user \"admin\" and password \"password\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "The admin page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I create new entry \"TEST1_uniqueValue\",\"london\",\"jhon\",\"07845534236\" and \"jhon@gmail.com\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I verify entry \"TEST1_uniqueValue\",\"london\",\"jhon\",\"07845534236\" and \"jhon@gmail.com\" in page",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I logout of console",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefs.i_navigate_to_home_page()"
});
formatter.result({
  "duration": 1232965567,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.iClickOnLoginPage()"
});
formatter.result({
  "duration": 1320361178,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 19
    },
    {
      "val": "password",
      "offset": 40
    }
  ],
  "location": "StepDefs.iCanProvideUsernameAndPasswordClickOnLogin(String,String)"
});
formatter.result({
  "duration": 13652519294,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.the_admin_page_is_displayed()"
});
formatter.result({
  "duration": 816584077,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TEST1_uniqueValue",
      "offset": 20
    },
    {
      "val": "london",
      "offset": 40
    },
    {
      "val": "jhon",
      "offset": 49
    },
    {
      "val": "07845534236",
      "offset": 56
    },
    {
      "val": "jhon@gmail.com",
      "offset": 74
    }
  ],
  "location": "StepDefs.i_can_enter_all_field_and(String,String,String,String,String)"
});
formatter.result({
  "duration": 5827766560,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TEST1_uniqueValue",
      "offset": 16
    },
    {
      "val": "london",
      "offset": 36
    },
    {
      "val": "jhon",
      "offset": 45
    },
    {
      "val": "07845534236",
      "offset": 52
    },
    {
      "val": "jhon@gmail.com",
      "offset": 70
    }
  ],
  "location": "StepDefs.i_verify_entry(String,String,String,String,String)"
});
formatter.result({
  "duration": 1995039280,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.i_logout_of_console()"
});
formatter.result({
  "duration": 817174437,
  "status": "passed"
});
formatter.after({
  "duration": 1672452315,
  "status": "passed"
});
formatter.before({
  "duration": 7772923755,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Create multiple entries",
  "description": "",
  "id": "hotel-booking-platform;create-multiple-entries",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "I am navigate to homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I click on login button",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I login with user \"admin\" and password \"password\"",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "The admin page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I create new entry \"TEST2_uniqueValue\",\"London\",\"Jhon\",\"1234567890\" and \"test@test.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I verify entry \"TEST2_uniqueValue\",\"London\",\"Jhon\",\"1234567890\" and \"test@test.com\" in page",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I create new entry \"TEST3_uniqueValue\",\"London\",\"Jhon\",\"1234567890\" and \"test@test.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I verify entry \"TEST3_uniqueValue\",\"London\",\"Jhon\",\"1234567890\" and \"test@test.com\" in page",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "I create new entry \"TEST4_uniqueValue\",\"London\",\"Jhon\",\"1234567890\" and \"test@test.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I verify entry \"TEST4_uniqueValue\",\"London\",\"Jhon\",\"1234567890\" and \"test@test.com\" in page",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "I logout of console",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefs.i_navigate_to_home_page()"
});
formatter.result({
  "duration": 1280039536,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.iClickOnLoginPage()"
});
formatter.result({
  "duration": 1084070763,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 19
    },
    {
      "val": "password",
      "offset": 40
    }
  ],
  "location": "StepDefs.iCanProvideUsernameAndPasswordClickOnLogin(String,String)"
});
formatter.result({
  "duration": 4196007149,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.the_admin_page_is_displayed()"
});
formatter.result({
  "duration": 782649302,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TEST2_uniqueValue",
      "offset": 20
    },
    {
      "val": "London",
      "offset": 40
    },
    {
      "val": "Jhon",
      "offset": 49
    },
    {
      "val": "1234567890",
      "offset": 56
    },
    {
      "val": "test@test.com",
      "offset": 73
    }
  ],
  "location": "StepDefs.i_can_enter_all_field_and(String,String,String,String,String)"
});
formatter.result({
  "duration": 7385733633,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TEST2_uniqueValue",
      "offset": 16
    },
    {
      "val": "London",
      "offset": 36
    },
    {
      "val": "Jhon",
      "offset": 45
    },
    {
      "val": "1234567890",
      "offset": 52
    },
    {
      "val": "test@test.com",
      "offset": 69
    }
  ],
  "location": "StepDefs.i_verify_entry(String,String,String,String,String)"
});
formatter.result({
  "duration": 2676160919,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TEST3_uniqueValue",
      "offset": 20
    },
    {
      "val": "London",
      "offset": 40
    },
    {
      "val": "Jhon",
      "offset": 49
    },
    {
      "val": "1234567890",
      "offset": 56
    },
    {
      "val": "test@test.com",
      "offset": 73
    }
  ],
  "location": "StepDefs.i_can_enter_all_field_and(String,String,String,String,String)"
});
formatter.result({
  "duration": 8756947441,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TEST3_uniqueValue",
      "offset": 16
    },
    {
      "val": "London",
      "offset": 36
    },
    {
      "val": "Jhon",
      "offset": 45
    },
    {
      "val": "1234567890",
      "offset": 52
    },
    {
      "val": "test@test.com",
      "offset": 69
    }
  ],
  "location": "StepDefs.i_verify_entry(String,String,String,String,String)"
});
formatter.result({
  "duration": 3161119676,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TEST4_uniqueValue",
      "offset": 20
    },
    {
      "val": "London",
      "offset": 40
    },
    {
      "val": "Jhon",
      "offset": 49
    },
    {
      "val": "1234567890",
      "offset": 56
    },
    {
      "val": "test@test.com",
      "offset": 73
    }
  ],
  "location": "StepDefs.i_can_enter_all_field_and(String,String,String,String,String)"
});
formatter.result({
  "duration": 8019319011,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TEST4_uniqueValue",
      "offset": 16
    },
    {
      "val": "London",
      "offset": 36
    },
    {
      "val": "Jhon",
      "offset": 45
    },
    {
      "val": "1234567890",
      "offset": 52
    },
    {
      "val": "test@test.com",
      "offset": 69
    }
  ],
  "location": "StepDefs.i_verify_entry(String,String,String,String,String)"
});
formatter.result({
  "duration": 3762186609,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.i_logout_of_console()"
});
formatter.result({
  "duration": 915043473,
  "status": "passed"
});
formatter.after({
  "duration": 1766939386,
  "status": "passed"
});
formatter.before({
  "duration": 7057114107,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Delete an entry",
  "description": "",
  "id": "hotel-booking-platform;delete-an-entry",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 41,
  "name": "I am navigate to homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "I click on login button",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "I login with user \"admin\" and password \"password\"",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "The admin page is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I create new entry \"TEST5_uniqueValue\",\"London\",\"Jhon\",\"1234567890\" and \"test@test.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "I verify entry \"TEST5_uniqueValue\",\"London\",\"Jhon\",\"1234567890\" and \"test@test.com\" in page",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "I remove entry for \"TEST5_uniqueValue\"",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I logout of console",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefs.i_navigate_to_home_page()"
});
formatter.result({
  "duration": 1225842869,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.iClickOnLoginPage()"
});
formatter.result({
  "duration": 1237122630,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 19
    },
    {
      "val": "password",
      "offset": 40
    }
  ],
  "location": "StepDefs.iCanProvideUsernameAndPasswordClickOnLogin(String,String)"
});
formatter.result({
  "duration": 3477349672,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.the_admin_page_is_displayed()"
});
formatter.result({
  "duration": 1386967901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TEST5_uniqueValue",
      "offset": 20
    },
    {
      "val": "London",
      "offset": 40
    },
    {
      "val": "Jhon",
      "offset": 49
    },
    {
      "val": "1234567890",
      "offset": 56
    },
    {
      "val": "test@test.com",
      "offset": 73
    }
  ],
  "location": "StepDefs.i_can_enter_all_field_and(String,String,String,String,String)"
});
formatter.result({
  "duration": 5242934308,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TEST5_uniqueValue",
      "offset": 16
    },
    {
      "val": "London",
      "offset": 36
    },
    {
      "val": "Jhon",
      "offset": 45
    },
    {
      "val": "1234567890",
      "offset": 52
    },
    {
      "val": "test@test.com",
      "offset": 69
    }
  ],
  "location": "StepDefs.i_verify_entry(String,String,String,String,String)"
});
formatter.result({
  "duration": 7549074187,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TEST5_uniqueValue",
      "offset": 20
    }
  ],
  "location": "StepDefs.i_remove_entry(String)"
});
formatter.result({
  "duration": 4567024616,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.i_logout_of_console()"
});
formatter.result({
  "duration": 896210852,
  "status": "passed"
});
formatter.after({
  "duration": 1477166271,
  "status": "passed"
});
});