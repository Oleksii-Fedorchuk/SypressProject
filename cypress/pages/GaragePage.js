import BasePage from "./BasePage";

export default class GaragePage extends BasePage {
    openGaragePage() {
        return cy.xpath(`//span[contains(@class, 'icon icon-garage')]`)
            .should('be.visible')
            .click();
    }

    addCarButton() {
        return cy.xpath(`//button[contains(text(), 'Add car')]`)
            .should('be.visible');
    }

    openAddCarForm() {
        return cy.xpath(`//button[contains(text(), 'Add car')]`)
            .click();
    }

    addCarModal() {
        return cy.xpath(`//div[@class='modal-content']`)
            .should("exist");
    }

    selectAudi() {
        return cy.xpath(`//select[@id="addCarBrand"]`)
            .select("Audi");
    }

    selectModelR8() {
        return cy.xpath(`//select[@id='addCarModel']`)
            .select("R8");
        ;
    }

    addCarMileage() {
        return cy.xpath(`//input[@id="addCarMileage"]`)
            .clear().type(1);
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
        return cy.xpath(`//div[contains(@class, 'modal-footer')]/button[contains(text(), 'Add')]`)
            .click();
    }

    openEditCarModal() {
        return cy.xpath(`//button[@class='car_edit btn btn-edit']`)
            .eq(0).should("exist").click();
    }

    removeCarFromGarage() {
        return cy.xpath(`//button[@class='btn btn-outline-danger']`)
            .should("be.visible").click();
    }

    confirmRemoveCarFromGarage() {
        return cy.xpath(`//button[@class='btn btn-danger']`)
            .should("be.visible").click();
    }

    verifyEmptyGaragePage() {
        return cy.xpath(`//p [@class='h3 panel-empty_message']`);
    }

    verifyAudiA8CarIsExist() {
        return cy.xpath(`//p[contains(@class, 'car_name h2') and contains(text(), 'Audi R8')]`);
    }
}

export const garagePage = new GaragePage();