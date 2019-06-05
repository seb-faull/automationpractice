@register
Feature: User Registration

As a user I want to be able to register an account

Scenario: If I enter the correct details I will create an account
  Given I am on the register page
  When I enter my email address and click the link to register
  And I input the correct details
  Then I will have an account and be directed to the my account page
