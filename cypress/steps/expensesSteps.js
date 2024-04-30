import {basePage} from "../pages/BasePage";
import {garagePage} from "../pages/GaragePage";
import {GeneralStep} from "./general_step";
import {expensesPage} from "../pages/ExpensesPage";

export default class ExpensesSteps extends GeneralStep {
    addExpensesToCar() {
        expensesPage.openFuelExpensesPage()
        expensesPage.openAnExpenseModal()
        expensesPage.addDataToReportDateInput()
        expensesPage.addMileage()
        expensesPage.addExpenseLiters()
        expensesPage.addExpenseTotalCost()
        expensesPage.clickOnAddAnExpensesButton()
    }
    verifyCarExpenses(){
        expensesPage.verifyDataInReportDateInput()
        expensesPage.verifyMileage()
        expensesPage.verifyLiters()
        expensesPage.verifyTotalCost()
    }
}

export const expensesSteps = new ExpensesSteps()