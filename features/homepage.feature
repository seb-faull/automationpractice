Feature: Homepage Activities

As a User I want to be able to use the homepage

  Scenario: If I click on the contact us link I will be directed to the contact page
    Given I am on the homepage
    When I click the contact us link
    Then I will go to the contact us page
