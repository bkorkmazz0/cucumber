@RegressionTest
Feature: Register Test

  Background:
    Given Navigate to Website
    And click Sign in button
    And type email "berkankorkmazz0@gmail.com"
    And click on Create an Account button

    Scenario: ilk senaryo
      And type firstname "berkan" and lastname "korkmaz"

    Scenario: ikinci senaryo
      And type Company "DELL"
      And type address "Pendik"

    Scenario Outline:
      And type firstname "<firstname>" and lastname "<lastname>"
      And type password "<password>"
      And type Company "<company>"
      And type address "<address>"
      Examples:
      |firstname|lastname|password|company|address|
      |ahmet|sungur|ahmet123|DELL|USA|
      |ayse|sungur|ayse123|DELL|USA|

