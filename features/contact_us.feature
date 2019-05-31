Feature: Contact Automationpractice.com

As a User I want to be able to send a message to Automationpractice.com

  Scenario: If I fill out the form successfully, with no errors, I will send a message
    Given I am on the contact page
    When I fill out the form successfully
    And I submit the form
    Then I will be redirected to success page and will be shown a success alert message

# Error tests:
  Scenario: If I fill out the form and leave the subject heading field blank, I will get an error
    Given I am on the contact page
    When I fill out the form and I leave the subject heading field blank
    And I submit the form
    Then I will be shown a subject heading error

  Scenario: If I fill out the form and leave the email address field blank, I will get an error
    Given I am on the contact page
    When I fill out the form and I leave the email address field blank
    And I submit the form
    Then I will be shown an email address error

  Scenario: If I fill out the form and leave the message field blank, I will get an error
    Given I am on the contact page
    When I fill out the form and I leave the message field blank
    And I submit the form
    Then I will be shown a message error
