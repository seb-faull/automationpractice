@login
Feature: User Login

As a user I want to be able to login to my account

Scenario: If I enter the correct details I will login
  Given I am on the login page
  When I enter my email address and password, and click the link to register
  Then I will login and be directed to my account page
