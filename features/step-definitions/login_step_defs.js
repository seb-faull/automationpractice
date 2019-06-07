const { client } = require('nightwatch-api');
const { Given, When, Then } = require('cucumber');

const signIn = client.page.sign_in();

const EMAIL_ADDRESS = 'sparta_testing_tester123135@spartaglobal.co';
const PASSWORD = '123456789';

Given(/^I am on the login page$/, () => {
    return signIn
        .navigate()
        .assert.urlContains('controller=authentication&back=my-account', 'URL params: contains controller=authentication&back=my-account')
        .waitForElementVisible('@loginForm', 'UI: Login Form is visible')
        .containsText('@loginForm', `ALREADY REGISTERED?
Email address
Password
Forgot your password?
Sign in`);
});

When(/^I enter my email address and password, and click the link to register$/, () => {
    return signIn
        .waitForElementVisible('@customerEmailInput', 'UI: Email address text field is visible')
        .waitForElementVisible('@customerPasswordInput', 'UI: Password text field is visible')
        .setValue('@customerEmailInput', `${EMAIL_ADDRESS}`)
        .setValue('@customerPasswordInput', `${PASSWORD}`)
        .click('@submitLogin');
});

Then(/^I will login and be directed to my account page$/, () => {
    return signIn
        .waitForElementVisible('@infoAccount', 'UI: Info account visible')
        .containsText('@infoAccount', 'Welcome to your account. Here you can manage all of your personal information and orders.');
});
