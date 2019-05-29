const xPathSelector = (selector) => {
    return {
        selector: selector,
        locateStrategy: 'xpath'
    }
};

module.exports = {
    url: 'http://automationpractice.com/index.php',
    elements: {
        bannerImg: xPathSelector('//*[@id="header"]/div[1]/div/div/a/img'),
        contactUsLink: '#contact-link',
        signInLink: '.login',
        searchBar: '#search_query_top',
        shoppingCartLink: xPathSelector('//*[@id="header"]/div[3]/div/div/div[3]/div/a')
    },
    commands: [{
        openShoppingCart() {
            return this
                .click('@shoppingCartLink');
        },
        contactUs() {
            return this
                .click('@contactUsLink');
        }
    }]
};
