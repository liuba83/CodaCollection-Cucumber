Feature: Coda Collection

Scenario: As a user, I would like to be able to successfully subscribe to the Coda mailing list

Given I open Home page
When I scroll to the bottom of the page
And I type my email
And I click Submit button
Then I see successful message


Scenario: As a potential Coda employee, I would like to view the QA Engineer job posting

Given I open Home page
When I scroll to the bottom of the page
And I click Jobs title
Then I see open positions
When I click QA Engineer title
Then I see QA Engineer job posting


Scenario: As a user, I would like to view a film page and navigate to its corresponding Amazon Prime Video page

Given I open Home page
When I click Films tab
Then I can navigate to corresponding Amazon page
