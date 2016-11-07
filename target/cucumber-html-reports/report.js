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
        "London",
        "Jhon",
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
  "duration": 8298136896,
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
  "name": "I create new entry \"TEST1_uniqueValue\",\"London\",\"Jhon\",\"07845534236\" and \"jhon@gmail.com\"",
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
  "name": "I verify entry \"TEST1_uniqueValue\",\"London\",\"Jhon\",\"07845534236\" and \"jhon@gmail.com\" in page",
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
  "duration": 1222583678,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.iClickOnLoginPage()"
});
formatter.result({
  "duration": 986633270,
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
  "duration": 3821368026,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.the_admin_page_is_displayed()"
});
formatter.result({
  "duration": 882819999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TEST1_uniqueValue",
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
  "duration": 6100854687,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TEST1_uniqueValue",
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
  "duration": 5701185263,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.i_logout_of_console()"
});
formatter.result({
  "duration": 817506248,
  "status": "passed"
});
formatter.after({
  "duration": 1841244980,
  "status": "passed"
});
formatter.before({
  "duration": 7162181266,
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
  "duration": 1290922503,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.iClickOnLoginPage()"
});
formatter.result({
  "duration": 1169157366,
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
  "duration": 2522085181,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.the_admin_page_is_displayed()"
});
formatter.result({
  "duration": 2087815945,
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
  "duration": 5676522365,
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
  "duration": 6478100009,
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
  "duration": 5228647659,
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
  "duration": 6695059700,
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
  "duration": 5855446628,
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
  "duration": 7234301098,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.i_logout_of_console()"
});
formatter.result({
  "duration": 820074371,
  "status": "passed"
});
formatter.after({
  "duration": 1541146851,
  "status": "passed"
});
formatter.before({
  "duration": 7340967640,
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
  "duration": 1254742548,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.iClickOnLoginPage()"
});
formatter.result({
  "duration": 964564823,
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
  "duration": 3076917379,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.the_admin_page_is_displayed()"
});
formatter.result({
  "duration": 2447460147,
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
  "duration": 7020205388,
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
  "duration": 7442273477,
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
  "duration": 6655075979,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.i_logout_of_console()"
});
formatter.result({
  "duration": 2009378666,
  "status": "passed"
});
formatter.after({
  "duration": 1462638620,
  "status": "passed"
});
});