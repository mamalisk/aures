Feature: Listening to events

  Scenario: Listen to a queue
    Given I create an event listener
    When the expected event is raised
    Then I verify that the message is retrievable from Aures
