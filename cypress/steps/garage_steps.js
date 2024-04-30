import {basePage} from "../pages/BasePage";
import {garagePage} from "../pages/GaragePage";
import {GeneralStep, generalSteps} from "./general_step";

export default class Garage_steps extends GeneralStep {
    addCarToGarage() {
        garagePage.addCarButton().should("exist");
        garagePage.openAddCarForm().should("exist");
        garagePage.addCarModal().should("be.visible");
        garagePage.selectAudi();
        garagePage.selectModelR8();
        garagePage.addCarMileage();
        garagePage.clickOnAddButtonInAddCarModal();
    }
    verifyCarIsExisted(){
        garagePage.verifyAudiA8CarIsExist();
    }
    removeCarFromGarage(){
        garagePage.openGaragePage();
        garagePage.openEditCarModal().should('be.visible');
        garagePage.removeCarFromGarage();
        garagePage.confirmRemoveCarFromGarage();
    }
    verifyCarIsNotExisted(){
        garagePage.verifyEmptyGaragePage()
    }
}

export const garageSteps = new Garage_steps()