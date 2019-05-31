const { client } = require('nightwatch-api');
const { Given, When, Then } = require('cucumber');

const homepage = client.page.homepage();

Given(/^I am on the homepage$/, () => {
    return homepage
        .navigate()
        .assert.urlContains('/index.php', 'URL params: contains /index.php')
        .waitForElementVisible('body', 'UI: Homepage body is visible')
        .assert.visible('@searchBar', 'UI: Search Bar is visible')
        .useXpath()
        .waitForElementVisible('@shoppingCartLink', 'UI: Shopping Cart link is visible')
        .waitForElementVisible('@bannerImg', 'UI: Banner image is visible');
});

When(/^I click the contact us link$/, () => {
    return homepage
        .contactUs();
});

Then(/^I will go to the contact us page$/, () => {
    const contactUs = client.page.contact_us();

    return contactUs
        .assert.urlContains('controller=contact', 'URL params: contains controller=contact')
        .waitForElementVisible('@breadcrumbSelector', 'UI: Breadcrumbs Navigation is visible')
        .waitForElementVisible('@contactUsHeading', 'UI: Contact Us heading is visible')
        .containsText('@contactUsBreadcrumb', 'Contact');
});
