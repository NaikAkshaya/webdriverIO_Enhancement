# WebdriverIO Cucumber Framework

A platform independent debuggable BDD Javascript testing framework. It's simple, easy to use and not dependant to any other tool or library. It's built with nodeJs, webdriver.io (the Selenium 2.0 bindings for NodeJS) and cucumber-js 

## Installation

You must have [Node.js](https://www.nodejs.org/) installed.
Note : For windows, Install Node version 8.14.0 


## Usage

# run 'npm install' in a terminal window from within the project folder


##
# Run test application
Run the test server: npm test

## Event handlers
You can register event handlers for the following events within the cucumber lifecycle.

const {After, Before, AfterAll, BeforeAll} = require('cucumber');

Event	     Example
Before	     Before(function() { // This hook will be executed before all scenarios})
After	     After(function() {// This hook will be executed after all scenarios});
BeforeAll	 BeforeAll(function() {// perform some shared setup});
AfterAll	 AfterAll(function() {// perform some shared teardown});

## Default directory structure
.
├── features
│   └── featurefolder
│       └── featurename.feature
|__ pageFunctions
|   |__ pageLevelFunction.js
├── pageObjects
│   └── pageName.page.js
|   └── pageName.page.json
├── reports
│   └── functional
│       └── testAutomation_Batch_Report
│           └──allure-raw-report
├── script
│
├── step-definitions
│    └── stepdefinitionsfolder
│       └── stepdefinition.steps.js
├── tempFiles
├── utilities

