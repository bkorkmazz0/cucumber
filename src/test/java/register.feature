Feature: Register Test

  Scenario Outline: Create An Account

    Given Navigate to Website
    And click Sign in button
    And type email "<Email>"
    And click on Create an Account button
    And choose title
    And type firstname "<firstname>" and lastname "<lastname>"
    And type password "<password>"
    And type Company "<Company>"
    And type address "<address>"
    Examples:
      | Email | firstname | lastname | password | Company | address |

      |bkorkmaz18@outlook.com|berkan|korkmaz|berkan123|egemsoft|pendik|
      |berkankorkmaz123@gmail.com|bilgin|korkmaz|asdasd|free|istanbul|
      |kis1@outlook.com|ahmet|malcok|malcok123|DELL|samsun|