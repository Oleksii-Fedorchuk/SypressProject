/// <reference types="cypress" />
import {basePage} from "../pages/BasePage";
import {garagePage} from "../pages/GaragePage";
import {expensesPage} from "../pages/ExpensesPage";

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
const testEmailForCreatingCar = randomEmail()
const testEmailForDeletingCar = randomEmail()
const testEmailForCarExpenses = randomEmail()

const user1 = {
    name: testName,
    lastName: testLastName,
    email: testEmailForCreatingUser,
    userPassword: testPassword
}

const user2 = {
    name: testName,
    lastName: testLastName,
    email: testEmailForCreatingCar,
    userPassword: testPassword
}

const user3 = {
    name: testName,
    lastName: testLastName,
    email: testEmailForDeletingCar,
    userPassword: testPassword
}

const user4 = {
    name: testName,
    lastName: testLastName,
    email: testEmailForCarExpenses,
    userPassword: testPassword
}

describe("Test qaAuo", () => {
    beforeEach(() => {
        cy.visit(`/`);
    })
    it("Visit site", () => {
        basePage.signUpButton().should('exist').click()
        basePage.createAccount(user1)
        basePage.verifyCreateAccountData(user1)
        basePage.clickOnCreateAccountButton()
        basePage.verifyAccountIsCreated()
    })
    it("Add car to garage", () => {
        basePage.signUpButton().should('exist').click();
        basePage.createAccount(user2);
        basePage.clickOnCreateAccountButton()
        garagePage.addCarButton().should("exist");
        garagePage.openAddCarForm();
        garagePage.addCarModal().should("exist");
        garagePage.selectAudi()
        garagePage.selectModelR8()
        garagePage.addCarMileage()
        garagePage.clickOnAddButtonInAddCarModal()
        garagePage.openEditCarModal()

    })
    it("Remove car from garage", () => {
        basePage.signUpButton().should('exist').click();
        basePage.createAccount(user3);
        basePage.clickOnCreateAccountButton()
        garagePage.addCarButton().should("exist");
        garagePage.openAddCarForm();
        garagePage.addCarModal().should("exist");
        garagePage.selectAudi()
        garagePage.selectModelR8()
        garagePage.addCarMileage()
        garagePage.clickOnAddButtonInAddCarModal()
        garagePage.openEditCarModal()
        garagePage.removeCarFromGarage()
        garagePage.confirmRemoveCarFromGarage()
        garagePage.emptyGaragePage().should("exist")
    })

    it("Car Expenses", () => {
        basePage.signUpButton().should('exist').click();
        basePage.createAccount(user4);
        basePage.clickOnCreateAccountButton()
        garagePage.addCarButton().should("exist");
        garagePage.openAddCarForm();
        garagePage.addCarModal().should("exist");
        garagePage.selectAudi()
        garagePage.selectModelR8()
        garagePage.addCarMileage()
        garagePage.clickOnAddButtonInAddCarModal()
        expensesPage.openFuelExpensesPage()
        expensesPage.openAnExpenseModal()
        expensesPage.addMileage()
        expensesPage.addExpenseLiters()
        expensesPage.addExpenseTotalCost()
        expensesPage.clickOnAddAnExpensesButton()
        expensesPage.verifyMileage()
        expensesPage.verifyLiters()
        expensesPage.verifyTotalCost()
    })
})
