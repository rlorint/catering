// IF PAGE DOESN'T WORK IN INTERNET EXPLORER FOLLOW THESE INSTRUCTIONS:
// 1. Select Tools >> Internet Options.
// 2. Click the Settings button in Browsing History.
// 3. Select the Every time I visit the webpage radio button.
// 4. Click OK to close the Settings dialog.
// 5. Click OK to close the Internet Options dialog.

//Main url server used (harcoded)
var requestprefix = "/JORA/LogicalLogin";
//Session ID must be the same in all controllers
var sessionId = null;
var appURL = "NewApp" // URL used for deep link

//Touch Library Angular Gestures
var JORA_APP = angular.module('HTMLAPP', ['ngRoute', 'mobile-angular-ui','nvd3ChartDirectives']);


