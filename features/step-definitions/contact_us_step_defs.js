const { client } = require('nightwatch-api');
const { Given, When, Then } = require('cucumber');

const CHOOSE = "0";
const WEBMASTER = "1";
const CUSTOMER_SERVICE = "2";

const contactUs = client.page.contact_us();

Given(/^I am on the contact page$/, () => {
    return contactUs
        .navigate()
        .waitForElementVisible('@contactForm', 'UI: Contact Form is visible')
        .containsText('@subHeading', 'SEND A MESSAGE');
});

When(/^I fill out the form successfully$/, () => {
    return contactUs
        .waitForElementPresent('@subHeadingDropDown', 'UI: Subheading is present')
        .waitForElementPresent(`#id_contact option[value="${WEBMASTER}"]`, 'UI: Webmaster option is present from dropdown')
        .waitForElementVisible('@emailInput', 'UI: Email text field is visible')
        .waitForElementVisible('@orderReferenceInput', 'UI: Order reference text field is visible')
        .fillForm(CUSTOMER_SERVICE, 'sam_smith_test@hotmail.com', '123-456-789', 'This is a test. I hope this finds you well');
});

When(/^I submit the form$/, () => {
    return contactUs
        .submit();
});

Then(/^I will be redirected to success page and will be shown a success alert message$/, () => {
    return contactUs
        .waitForElementVisible('@alertSuccess', 'UI: Alert success message visible')
        .containsText('@alertSuccess', 'Your message has been successfully sent to our team.');
});

When(/^I fill out the form and I leave the subject heading field blank$/, () => {
    return contactUs
        .waitForElementPresent(`#id_contact option[value="${WEBMASTER}"]`, 'UI: Webmaster option is present from dropdown')
        .fillForm(CHOOSE, 'sam_smith_test@hotmail.com', '123-456-789', 'This is a test. I hope this finds you well');
});

Then(/^I will be shown a subject heading error$/, () => {
    return contactUs
        .waitForElementVisible('@alertDanger', 'UI: Alert danger message visible')
        .containsText('@alertDanger', `There is 1 error
Please select a subject from the list provided.`);
});

When(/^I fill out the form and I leave the email address field blank$/, () => {
    return contactUs
        .waitForElementVisible('@emailInput', 'UI: Email text field is visible')
        .fillForm(CUSTOMER_SERVICE, '', '123-456-789', 'This is a test. I hope this finds you well');
});

Then(/^I will be shown an email address error$/, () => {
    return contactUs
        .waitForElementVisible('@alertDanger', 'UI: Alert danger message visible')
        .containsText('@alertDanger', `There is 1 error
Invalid email address.`);
});

When(/^I fill out the form and I leave the message field blank$/, () => {
    return contactUs
        .waitForElementVisible('@messageInput', 'UI: Message text field is visible')
        .fillForm(CUSTOMER_SERVICE, 'sam_smith_test@hotmail.com', '123-456-789', '');
});

Then(/^I will be shown a message error$/, () => {
    return contactUs
        .waitForElementVisible('@alertDanger', 'UI: Alert danger message visible')
        .containsText('@alertDanger', `There is 1 error
The message cannot be blank.`);
});
