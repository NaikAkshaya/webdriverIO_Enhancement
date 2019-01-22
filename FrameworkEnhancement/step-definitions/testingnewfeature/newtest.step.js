const { Given, When, Then, And } = require('cucumber')
const { Before, After } = require('cucumber')
var json = require('json-file');
var file = json.read('./utilities/testData.json');
Given(/^user navigates to Gmail login page$/, function () {
    console.log('user navigates to Gmail login page')
    console.log('USER 1')

});
When(/^user launches Gmail url$/, function () {
console.log('user navigates to Gmail login page')

});
Then(/^user enters the emailid$/, function () {
    browser.click('/html/body/nav/div/a[2]')
    browser.setValue('//*[@id="identifierId"]','akshaya.naik@accionlabs.com')
    console.log('Entered email id ')
});
Then(/^user clicks on next button$/, function () {
    
    browser.click('//*[@id="identifierNext"]')
    console.log('Clicked on Next button')
});

Given(/^user2 navigates to Gmail login page$/, function () {
    console.log('user navigates to Gmail login page')
    console.log('USER 2')

});
When(/^user2 launches Gmail url$/, function () {
console.log('user navigates to Gmail login page')

});
Then(/^user2 enters the emailid$/, function () {
    browser.click('/html/body/nav/div/a[2]')
    browser.setValue('//*[@id="identifierId"]','akshaya.naik@accionlabs.com')
    console.log('Entered email id ')
});
Then(/^user2 clicks on next button$/, function () {
    
    browser.click('//*[@id="identifierNext"]')
    console.log('Clicked on Next button')
});


Before(function () {
    
    commonLib.loadPage('./')
    //loginLib.loginToAmwater(global.loginId, global.password)

});

After(function() {

    //logout from application
    // if (!dashboardPage.modalWindowCloseButton.isExisting()) {
    //     dashboardLib.logoutAmwater()
    // }
    //commonLib.loadPage('./')
    console.log('I am out')
})
