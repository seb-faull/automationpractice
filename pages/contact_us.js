module.exports = {
    url: 'http://automationpractice.com/index.php?controller=contact',
    elements: {
        contactUsBreadcrumb: '.navigation_page',
        breadrumbSelector: '.breadcrumb',
        contactUsHeading: '.page-heading'
    },
    commands: [{
        containsText(selector, value) {
            return this
                .expect.element(`${selector}`).text.to.equal(`${value}`);
        },
    }]
};
