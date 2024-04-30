/// <reference types="cypress" />
import {basePage} from "../pages/BasePage";
import {generalSteps} from "../steps/general_step";
import {garageSteps} from "../steps/garage_steps";
import {expensesSteps} from "../steps/expensesSteps";

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

const testName = "SomeName";
const testLastName = "SomeLastName"
const testPassword = "Qwe123!t"
const testEmailForCreatingUser = randomEmail()
const user1 = {
    name: testName, lastName: testLastName, email: testEmailForCreatingUser, userPassword: testPassword
}
const existed_user = {
    name: "email@emailll.com", password: "123qweASD,./",
}


describe("User creating", () => {
    beforeEach(() => {
        cy.visit(`/`);
    })
    it("Create a random user", () => {
        basePage.signUpButton().should('exist').click()
        basePage.createAccount(user1)
        basePage.verifyCreateAccountData(user1)
        basePage.clickOnCreateAccountButton()
        basePage.verifyAccountIsCreated()
    })
})

describe("Tests with existed user", () => {
    beforeEach(() => {
        cy.visit(`/`);
        generalSteps.login(existed_user.name, existed_user.password)
    })

    it("Add car to garage", () => {
        garageSteps.addCarToGarage();
        garageSteps.verifyCarIsExisted();

    })
    it("Remove car from garage", () => {
        garageSteps.removeCarFromGarage()
        garageSteps.verifyCarIsNotExisted()
    })
    it("Car Expenses", () => {
        garageSteps.addCarToGarage()
        expensesSteps.addExpensesToCar()
        expensesSteps.verifyCarExpenses()
        garageSteps.removeCarFromGarage()
    })
})
