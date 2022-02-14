
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

// Scenario: As a user, I would like to be able to successfully subscribe to the Coda mailing list

Given ('I open Home page', () => {
    cy.visit('https://codacollection.co/')   
})

When ('I scroll to the bottom of the page', () => {
    cy.scrollTo('bottom')
})

 And ('I type my email', () => {
     cy.get("input[type='email']")
     .type('test@gmail.com')
 })

 And ('I click Submit button', () => {
     cy.get("button[data-testid='FooterEmailSubscriptionForm-submit']")
     .click()
 })

Then ('I see successful message', () => {
    cy.get("div[data-testid='FooterEmailSubscriptionForm-success-message']")
    .contains("Great. You're in.")
    .should('be.visible')
})


// Scenario: As a potential Coda employee, I would like to view the QA Engineer job posting

And ('I click Jobs title', () => {
cy.get("a[href='/jobs']")
.click()
})

Then ('I see open positions', () => {
    cy.get("div[class='sc-bdvvtL dnmmIz']")
    .should('have.text', 'Open Positions')
})

When ('I click QA Engineer title', () => {
    cy.scrollTo(0, 700)
    cy.get("a[href='/jobs/qa-engineer-remote-4000048217']")
    .should('be.visible')
    .click()
})

Then ('I see QA Engineer job posting', () => {
    cy.get("div[class='Text__BrandText-sc-15dpo10-0 gZeWNt']")
    .should('have.text', 'QA Engineer (Remote)')
})


//Scenario: As a user, I would like to view a film page and navigate to its corresponding Amazon Prime Video page

When ('I click Films tab', () => {
cy.get('li:nth-of-type(2) .Text__PrimaryText-sc-15dpo10-1.fLmHtB')
.should('have.text', 'Films')
.click()
.get('.BEgFB.Text__PrimaryText-sc-15dpo10-1')
.should('have.text', 'All Films')
 })

 Then ('I can navigate to corresponding Amazon page', () => {
    cy.get('.CodaButton__CodaLink-sc-fu9dca-2.bGVJXK.fBSZpf.sc-bdvvtL')
    .should('be.visible')
    .should('have.attr', 'target', '_blank')
 })