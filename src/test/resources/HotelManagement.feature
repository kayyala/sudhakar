Feature:Hotel Booking Platform
  Add/Remove entries in the platform


  Scenario Outline: Create a new entry

    Given I am navigate to homepage
    When I click on login button
    Then I login with user "admin" and password "password"
    And The admin page is displayed

    When I create new entry "<Hotelname>","<Adress>","<Owner>","<Phonenumber>" and "<Email>"
    Then I verify entry "<Hotelname>","<Adress>","<Owner>","<Phonenumber>" and "<Email>" in page
    And I logout of console

    Examples:
      | Hotelname         | Adress  | Owner | Phonenumber | Email          |
      | TEST1_uniqueValue | Telford | Jhon  | 07845534236 | jhon@gmail.com |


  Scenario: Create multiple entries

    Given I am navigate to homepage
    When I click on login button
    Then I login with user "admin" and password "password"
    And The admin page is displayed

    When I create new entry "TEST2_uniqueValue","London","Jhon","1234567890" and "test@test.com"
    Then I verify entry "TEST2_uniqueValue","London","Jhon","1234567890" and "test@test.com" in page

    When I create new entry "TEST3_uniqueValue","London","Jhon","1234567890" and "test@test.com"
    Then I verify entry "TEST3_uniqueValue","London","Jhon","1234567890" and "test@test.com" in page

    When I create new entry "TEST4_uniqueValue","London","Jhon","1234567890" and "test@test.com"
    Then I verify entry "TEST4_uniqueValue","London","Jhon","1234567890" and "test@test.com" in page

    And I logout of console

  Scenario: Delete an entry

    Given I am navigate to homepage
    When I click on login button
    Then I login with user "admin" and password "password"
    And The admin page is displayed

    When I create new entry "TEST5_uniqueValue","London","Jhon","1234567890" and "test@test.com"
    Then I verify entry "TEST5_uniqueValue","London","Jhon","1234567890" and "test@test.com" in page
    And I remove entry for "TEST5_uniqueValue"
    And I logout of console
