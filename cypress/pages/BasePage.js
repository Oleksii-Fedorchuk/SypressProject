export default class BasePage {
    // Header selectors
    garageButtonInHeader() {
        return cy.xpath(`//a[contains(@class, 'btn header-link -active') 
        and contains(text(), 'Garage')]`);
    }

    fuelExpensesButtonInHeader() {
        return cy.xpath(`//a[contains(@class, 'btn header-link') 
        and contains(text(), 'Fuel expenses')]`)
    }

    instructionsButtonInHeader() {
        return cy.xpath(`a[contains(@class, 'btn header-link') 
        and contains(text(), 'Instructions')]`)
    }

    myProfileDropdown() {
        return cy.xpath(`//button[@id='userNavDropdown']`);
    }

    openMyProfileDropdown() {
        return cy.xpath(`//button[@id='userNavDropdown']`).click();
    }

    garageItemInMyProfileDropdown() {
        return cy.xpath(`//a [contains(@class, 'dropdown-item btn btn-link user-nav_link')
         and contains(text(), 'Garage')]`);
    }

    fuelExpensesItemInMyProfileDropdown() {
        return cy.xpath(`//a [contains(@class, 'dropdown-item btn btn-link user-nav_link')
         and contains(text(), 'Fuel expenses')]`);
    }

    instructionsItemInMyProfileDropdown() {
        return cy.xpath(`//a [contains(@class, 'dropdown-item btn btn-link user-nav_link')
         and contains(text(), 'Instructions')]`)
    }

    profileItemInMyProfileDropdown() {
        return cy.xpath(`//a[contains(@class, 'dropdown-item btn btn-link user-nav_link') 
        and contains(text(),'Profile')]`);
    }

    settingsItemInMyProfileDropdown() {
        return cy.xpath(`//a[contains(@class, 'dropdown-item btn btn-link user-nav_link') 
        and contains(text(), 'Settings')]`);
    }

    logoutItemInMyProfileDropdown() {
        return cy.xpath(`//button[contains(@class, 'dropdown-item btn btn-link user-nav_link') 
        and contains(text(), 'Logout')]`);
    }

    //Body selectors

    signUpButton() {
        return cy.xpath(`//button[@class='hero-descriptor_btn btn btn-primary']`);
    }

    signUpName() {
        return cy.xpath(`//input[@id='signupName']`);
    }

    signUpLastName() {
        return cy.xpath(`//input[@id='signupLastName']`);
    }

    signUpEmail() {
        return cy.xpath(`//input[@id='signupEmail']`);
    }

    signUpPassword() {
        return cy.xpath(`//input[@id='signupPassword']`);
    }

    signUpRepeatPassword() {
        return cy.xpath(`//input[@id='signupRepeatPassword']`);
    }

    registerButton() {
        return cy.xpath(`//button[@class='btn btn-primary']`);
    }


    profileName() {
        return cy.xpath(`//p[@class='profile_name display-4']`);
    }

    // Footer selectors

    rightsReserved() {
        return cy.xpath(`//p[contains(text(), '© 2021 Hillel IT school')]`)
    }

    footerContent() {
        return cy.xpath(`//p[contains(text(), 'Hillel auto developed in Hillel IT school 
        for educational purposes of QA courses.')`)
    }

    createAccount(user) {
        this.signUpName().clear().type(user.name);
        this.signUpLastName().clear().type(user.lastName);
        this.signUpEmail().clear().type(user.email);
        this.signUpPassword().clear().type(user.userPassword);
        this.signUpRepeatPassword().type(user.userPassword);
    }

    verifyCreateAccountData(user) {
        cy.url().should("include", 'https://qauto2.forstudy.space/')
        this.signUpName().should('contain.value', user.name);
        this.signUpLastName().should('contain.value', user.lastName);
        this.signUpEmail().should('contain.value', user.email);
        this.signUpRepeatPassword().should('contain.value', user.userPassword);
        this.signUpRepeatPassword().should('contain.value', user.userPassword);
        this.registerButton().should('exist')
    }

    clickOnCreateAccountButton() {
        this.registerButton().click();
    }

    verifyAccountIsCreated(user) {
        this.openMyProfileDropdown();
        this.profileItemInMyProfileDropdown().click()
        this.profileName().should('contain.text', "SomeName");
    }

}
export const basePage = new BasePage();