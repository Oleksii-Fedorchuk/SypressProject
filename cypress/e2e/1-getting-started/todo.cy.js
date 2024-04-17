/// <reference types="cypress" />
function randomEmail() {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let email = '';
    const length = Math.floor(Math.random() * 10) + 5;
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        email += characters[randomIndex];
    }
    email += '@example.com';
    return email;
}


const baseCreds = "guest:welcome2qauto@";
const baseUrl = "qauto2.forstudy.space/";
const testName = "SomeName";
const testLastName = "SomeLastName"
const testPassword = "Qwe123!t"
const testEmail = randomEmail()


describe("Test qaAuo", () => {
    it("Visit site", () => {
        cy.visit(`https://${baseCreds}${baseUrl}`);
        cy.get('button').contains('Sign up').click();
        cy.get("input#signupName").clear().type(testName).should("contain.value", testName);
        cy.get("input#signupLastName").clear().type(testLastName).should("contain.value", testLastName);
        cy.get("input#signupEmail").clear().type(testEmail).should("contain.value", testEmail);
        cy.get("input#signupPassword").clear().type(testPassword).should("contain.value", testPassword);
        cy.get("input#signupRepeatPassword").clear().type(testPassword).should("contain.value", testPassword);
        cy.get("button").contains("Register").click();
        cy.get("button").contains(" My profile ").click();
        cy.get("a").contains("Profile").click();
        cy.get('p').contains(`${testName} undefined`).should("contain.text", testName)
    })
})
// . -  class
// # - id
// [] = attribute
// button - tag