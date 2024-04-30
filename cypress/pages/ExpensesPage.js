import BasePage from "./BasePage";

const numberOfMileage = "60"
const numberOfExpensesLiters = "12"
const NumberExpenseTotalCost = "300";
const DataForDateInput = "30.04.2024"

export default class ExpensesPage extends BasePage {
    openFuelExpensesPage() {
        return cy.xpath(`//a[contains(@class, 'btn btn-white btn-sidebar sidebar_btn') and contains(text(), 'Fuel expenses')]`)
            .should('exist').click()
    }

    clickOnAddAnExpensesButton() {
        return cy.xpath(`//div/app-add-expense-modal/div[3]/button[2]`)
            .click()
    }

    openAnExpenseModal() {
        return cy.xpath(`//button[@class='btn btn-primary']`)
            .click()
    }

    reportDateInput() {
        return cy.xpath(`//input[@id='addExpenseDate']`)
    }

    addDataToReportDateInput() {
        this.reportDateInput().clear().type(DataForDateInput)
    }

    verifyDataInReportDateInput() {
        return cy.xpath(`//td[text()='30.04.2024']`)
            .should("exist").should('have.text', DataForDateInput);
    }

    addMileage() {
        return cy.xpath(`//input[@id="addExpenseMileage"]`)
            .clear().type(numberOfMileage);
    }

    verifyMileage() {
        return cy.xpath(`//td[text()='60']`)
            .should("exist").should('have.text', numberOfMileage);
    }

    addExpenseLiters() {
        return cy.xpath(`//input[@id='addExpenseLiters']`)
            .type(numberOfExpensesLiters)
    }

    verifyLiters() {
        return cy.xpath(`//td[text()='12L']`)
            .should("exist").should('have.text', `${numberOfExpensesLiters}L`);
    }

    addExpenseTotalCost() {
        return cy.xpath(`//input[@id='addExpenseTotalCost']`)
            .type(NumberExpenseTotalCost)
    }


    verifyTotalCost() {
        return cy.xpath(`//td[text()='300 USD']`)
            .should("exist").should('have.text', `${NumberExpenseTotalCost} USD`);
    }
}

export const expensesPage = new ExpensesPage();