import BasePage from "./BasePage";

export default class GaragePage extends BasePage {
    titleOfGaragePage() {
        return cy.xpath(`//h1[contains(text(), 'Garage')]`);
    }

    addCarButton() {
        return cy.xpath(`//button[contains(text(), 'Add car')]`);
    }

    openAddCarForm() {
        return cy.xpath(`//button[contains(text(), 'Add car')]`).click();
    }

    addCarModal() {
        return cy.xpath(`//div[@class='modal-content']`);
    }

    selectAudi() {
        return cy.xpath(`//select[@id="addCarBrand"]`).select("Audi");
    }

    selectModelR8() {
        return cy.xpath(`//select[@id='addCarModel']`).select("R8");
        ;
    }

    addCarMileage() {
        return cy.xpath(`//input[@id="addCarMileage"]`).clear().type(1);
    }

    titleOfAddCarModal() {
        return cy.xpath(`//h4[@class='modal-title']`);
    }

    closeAddCarModal() {
        return cy.xpath(`//button[@class='close']`);
    }

    cancelButtonInAddCarModal() {
        return cy.xpath(`//div[contains(@class, 'modal-footer')]/button[contains(text(), 'Cancel')]`);
    }

    clickOnAddButtonInAddCarModal() {
        return cy.xpath(`//div[contains(@class, 'modal-footer')]/button[contains(text(), 'Add')]`).click();
    }

    openEditCarModal() {
        return cy.xpath(`//span[@class='icon icon-edit']`).click();
    }

    removeCarFromGarage() {
        return cy.xpath(`//button[@class='btn btn-outline-danger']`).click();
    }

    confirmRemoveCarFromGarage() {
        return cy.xpath(`//button[@class='btn btn-danger']`).click();
    }

    emptyGaragePage() {
        return cy.xpath(`//p [@class='h3 panel-empty_message']`);
    }
}

export const garagePage = new GaragePage();