@SmokeTest
Feature: Contact Us Test

  Scenario: Go to website and test Contact Us page

    Given navigate to website
    And click on contact us button
    And select Subject Heading
    And type Email
    And type Order reference
    And type a message
    When click on send button
    Then verify success message