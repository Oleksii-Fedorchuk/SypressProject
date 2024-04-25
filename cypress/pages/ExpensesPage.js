import BasePage from "./BasePage";

const numberOfMileage = "60"
const numberOfExpensesLiters = "12"
const NumberExpenseTotalCost = "300";

export default class ExpensesPage extends BasePage {
    openFuelExpensesPage() {
        return cy.xpath(`//a[contains(@class, 'btn btn-white btn-sidebar sidebar_btn') and contains(text(), 'Fuel expenses')]`).should('exist').click()
    }

    clickOnAddAnExpensesButton() {
        return cy.xpath(`//div/app-add-expense-modal/div[3]/button[2]`).click()
    }

    openAnExpenseModal() {
        return cy.xpath(`//button[@class='btn btn-primary']`).click()
    }

    emptyGarageText() {
        return cy.xpath(`//p[contains(text(), 'You don’t have any cars in ')]`)
    }

    returnToYourGarageLink() {
        return cy.xpath(`//a[contains(text(), 'your garage')]`)
    }

    addMileage() {
        return cy.xpath(`//input[@id="addExpenseMileage"]`).clear().type(numberOfMileage);
    }

    addExpenseLiters() {
        return cy.xpath(`//input[@id='addExpenseLiters']`).type(numberOfExpensesLiters)
    }

    addExpenseTotalCost() {
        return cy.xpath(`//input[@id='addExpenseTotalCost']`).type(NumberExpenseTotalCost)
    }

    verifyMileage() {
        return cy.xpath(`//td[text()='60']`).should("exist").should('have.text', numberOfMileage);
    }

    verifyLiters() {
        return cy.xpath(`//td[text()='12L']`).should("exist").should('have.text', `${numberOfExpensesLiters}L`);
    }

    verifyTotalCost() {
        return cy.xpath(`//td[text()='300 USD']`).should("exist").should('have.text', `${NumberExpenseTotalCost} USD`);
    }
}

export const expensesPage = new ExpensesPage();