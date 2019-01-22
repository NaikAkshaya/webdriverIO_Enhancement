Feature: Login to Gmail.com

   Scenario: User launch Gmail and enters valid credentials
    Given user navigates to Gmail login page
    When user launches Gmail url
    Then user enters the emailid
    Then user clicks on next button
    
   Scenario: User2 launch Gmail and enters valid credentials
    Given user2 navigates to Gmail login page
    When user2 launches Gmail url
    Then user2 enters the emailid
    Then user2 clicks on next button