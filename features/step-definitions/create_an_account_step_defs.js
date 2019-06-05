const { client } = require('nightwatch-api');
const { Given, When, Then } = require('cucumber');

const signIn = client.page.sign_in();

const TITLE_MR = "1";
const TITLE_MRS = "2";
const EMAIL_ADDRESS = 'sparta_testing_tester123135@spartaglobal.co';
const PASSWORD = '123456789';

Given(/^I am on the register page$/, () => {
    return signIn
        .navigate()
        .assert.urlContains('controller=authentication&back=my-account', 'URL params: contains controller=authentication&back=my-account')
        .waitForElementVisible('@createAccountForm', 'UI: Create Account Form is visible')
        .containsText('@createAccountForm', `CREATE AN ACCOUNT
Please enter your email address to create an account.
Email address
Create an account`);
});

When(/^I enter my email address and click the link to register$/, () => {
    return signIn
        .waitForElementVisible('@emailAddressInput', 'UI: Email address text field is visible')
        .setValue('@emailAddressInput', `${EMAIL_ADDRESS}`)
        .click('@createAccountLink');
});

When(/^I input the correct details$/, () => {
    return signIn
        .waitForElementVisible('@accountCreationForm', 'UI: Account creation form is visible')
        .assert.urlContains('account-creation', 'URL params: contains "account-creation"')
        .fillPersonalInfoForm('@titleMr', 'Sam', 'Smith', `${PASSWORD}`, '15', '6', '1994', '@newsletterCheckbox', '@specialOfferCheckbox')
        .fillAddressForm('Sam', 'Smith', 'Sparta Global', '125 London Wall', 'Barbican', 'London', '32', '00000', '21', 'Additional info test', '02088888888', '07507588888')
        .submit();
});

Then(/^I will have an account and be directed to the my account page$/, () => {
    return signIn
        .waitForElementVisible('@infoAccount', 'UI: Info account visible')
        .containsText('@infoAccount', 'Welcome to your account. Here you can manage all of your personal information and orders.');
});
