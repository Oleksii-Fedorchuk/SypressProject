import {basePage} from "../pages/BasePage";

export class GeneralStep {
    login(email, password) {
        basePage.findButtonByText('Sign In').click();
        basePage.signInEmail().type(email);
        basePage.signInPassword().type(password);
        basePage.findButtonByText('Login').click();
    }
}

export const generalSteps = new GeneralStep();