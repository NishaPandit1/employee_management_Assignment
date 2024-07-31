// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



import GenericActions from "../utilities/genericActions";
import addNewEmployeePageObject from "../pageObject/add_new_employee.pageObject";
const genericActions = new GenericActions();
const addEmployeePageObject = new addNewEmployeePageObject();

Cypress.Commands.add('generateRandomUser', () => {
    const randomUser = {
        userName : genericActions.generateUserName(),
        salary : `${Math.floor(Math.random() * 1000000)}`,
        contact : genericActions.generateMobileNumber(),
        dob : genericActions.generateDate(),
        joining : genericActions.generateDate(),
        relieving : genericActions.generateDate(),
        status : genericActions.getStatus()
    };

    cy.writeFile('cypress/fixtures/randomUser.json', randomUser);
});

Cypress.Commands.add('registerUser', () => {
    cy.generateRandomUser();
    addEmployeePageObject.getAddEmployeeButton();
    addEmployeePageObject.getNameField();
    addEmployeePageObject.getSalaryField();
    addEmployeePageObject.getContactField();
    addEmployeePageObject.getDobField();
    addEmployeePageObject.getJoiningField();
    addEmployeePageObject.getRelievingField();
    addEmployeePageObject.getstatus();
    addEmployeePageObject.getSubmitButton();
});
