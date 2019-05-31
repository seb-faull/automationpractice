module.exports = {
    url: 'http://automationpractice.com/index.php?controller=contact',
    elements: {
        contactUsBreadcrumb: '.navigation_page',
        breadcrumbSelector:  '.breadcrumb',
        contactUsHeading:    '.page-heading',
        contactForm:         '.contact-form-box',
        subHeading:          '.page-subheading',
        subHeadingDropDown:  '#id_contact',
        emailInput:          '#email',
        orderReferenceInput: '#id_order',
        messageInput:        '#message',
        submitMessage:       '#submitMessage',
        alertSuccess:        '.alert-success',
        alertDanger:         '.alert-danger'
    },
    commands: [{
        containsText(selector, value) {
            return this
                .expect.element(`${selector}`).text.to.equal(`${value}`);
        },
        fillForm(subjectHeading, email, orderRef, message) {
            return this
                .click(`#id_contact option[value="${subjectHeading}"]`)
                .setValue('@emailInput', `${email}`, `UI: Input email "${email}"`)
                .setValue('@orderReferenceInput', `${orderRef}`, `UI: Input order ref "${orderRef}"`)
                .setValue('@messageInput', `${message}`, 'UI: Input message set');
        },
        submit() {
            return this
                .click('@submitMessage');
        }
    }]
};
