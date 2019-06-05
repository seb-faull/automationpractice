module.exports = {
    url: 'http://automationpractice.com/index.php?controller=authentication&back=my-account',
    elements: {
        createAccountSubHeading:    '//*[@id="create-account_form"]/h3',
        emailAddressInput:          '#email_create',
        createAccountLink:          '#SubmitCreate',
        createAccountForm:          '#create-account_form',
        loginForm:                  '#login_form',
        accountCreationForm:        '#account-creation_form',
        // Personal Info:
        titleMr:                    '#id_gender1',
        titleMrs:                   '#id_gender2',
        customerFirstnameInput:     '#customer_firstname',
        customerLastnameInput:      '#customer_lastname',
        customerEmailInput:         '#email',
        customerPasswordInput:      '#passwd',
        dobDaysDropdown:            '#days',
        dobMonthsDropdown:          '#months',
        dobYearsDropdown:           '#years',
        newsletterCheckbox:         'input[name="newsletter"]',
        specialOfferCheckbox:       'input[name="optin"]',
        // Address Info:
        addressFirstNameInput:      '#firstname',
        addressLastNameInput:       '#lastname',
        addressCompanyNameInput:    '#company',
        addressLine1Input:          '#address1',
        addressLine2Input:          '#address2',
        addressCityInput:           '#city',
        addressStateDropdown:       '#id_state',
        addressPostcodeInput:       '#postcode',
        addressCountryDropdown:     '#id_country',
        addressAdditionalInfoInput: '#other',
        addressHomePhoneInput:      '#phone',
        addressMobilePhoneInput:    '#phone_mobile',
        addressAliasInput:          '#alias',
        submitCreateAccount:        '#submitAccount',
        infoAccount:                '.info-account'
    },
    commands: [{
        containsText(selector, value) {
            return this
                .expect.element(`${selector}`).text.to.equal(`${value}`);
        },
        fillPersonalInfoForm(title, firstName, lastName, password, dobDay, dobMonth, dobYear, newsletter, specialOffers) {
            return this
                .click(`${title}`)
                .setValue('@customerFirstnameInput', `${firstName}`, `UI: Input first name "${firstName}"`)
                .setValue('@customerLastnameInput', `${lastName}`, `UI: Input last name "${lastName}"`)
                .assert.value('@customerEmailInput', 'sparta_testing_tester123135@spartaglobal.co', 'UI: Input email address "sparta_testing_tester123135@spartaglobal.co"')
                .setValue('@customerPasswordInput', `${password}`, `UI: Input password "${password}"`)
                .click(`#days option[value="${dobDay}"]`)
                .click(`#months option[value="${dobMonth}"]`)
                .click(`#years option[value="${dobYear}"]`)
                .click(`${newsletter}`)
                .click(`${specialOffers}`);
        },
        fillAddressForm(firstName, lastName, company, addressLine1, addressLine2, city, state, postcode, country, additionalInfo, homePhone, mobilePhone) {
            return this
                .setValue('@addressFirstNameInput', `${firstName}`, `UI: Address first name ${firstName}`)
                .setValue('@addressLastNameInput', `${lastName}`, `UI: Address last name ${lastName}`)
                .setValue('@addressCompanyNameInput', `${company}`, `UI: Input company "${company}"`)
                .setValue('@addressLine1Input', `${addressLine1}`, `UI: Input address line 1 "${addressLine1}"`)
                .setValue('@addressLine2Input', `${addressLine2}`, `UI: Input address line 2 "${addressLine2}"`)
                .setValue('@addressCityInput', `${city}`, `UI: Input city "${city}"`)
                .click(`#id_state option[value="${state}"]`)
                .setValue('@addressPostcodeInput', `${postcode}`, `UI: Input postcode "${postcode}"`)
                .click(`#id_country option[value="${country}"]`)
                .setValue('@addressAdditionalInfoInput', `${additionalInfo}`, `UI: Input additional info "${additionalInfo}"`)
                .setValue('@addressHomePhoneInput', `${homePhone}`, `UI: Input home phone "${homePhone}"`)
                .setValue('@addressMobilePhoneInput', `${mobilePhone}`, `UI: Input mobile phone "${mobilePhone}"`)
                .assert.value('@addressAliasInput', 'My address', 'UI: Address address alias "My address"');
        },
        submit() {
            return this
                .click('@submitCreateAccount');
        }
    }]
};
