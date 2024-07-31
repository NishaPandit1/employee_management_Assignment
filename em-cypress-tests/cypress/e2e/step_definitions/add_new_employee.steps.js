import { Given, When, Then, } from "@badeball/cypress-cucumber-preprocessor";
import addNewEmployeePageObject from "../../pageObject/add_new_employee.pageObject";
import Urls from "../../pageUrls/urls.json";
const addEmployeePageObject = new addNewEmployeePageObject();

Given('User is on the {string} page', (url) => {
    cy.visit(Urls[url]);
});
Then("User should view Employee List heading on Page", () => {
    addEmployeePageObject.getTitle();
})
When('User click on the {string} button', (button) => {
    if (button == 'Add Employee') {
        addEmployeePageObject.getAddEmployeeButton();

    }
    else {
        addEmployeePageObject.getSubmitButton();
    }
});

Then('User should be redirected to page having url {string}', (url) => {
    addEmployeePageObject.getUrl(url);

});

When('User enters {string} in the {string} input field', (inputValue, fieldName) => {
    if (fieldName == 'Salary') {
        addEmployeePageObject.getSalaryField(inputValue);
    }
    else if (fieldName == 'Contact') {
        addEmployeePageObject.getContactField(inputValue);
    }
    else {
        addEmployeePageObject.getNameField(inputValue);
    }
});

Then('User selects {string} date from calendar widget', (fieldName) => {
    if (fieldName == 'dob') {
        addEmployeePageObject.getDobField();
    }
    else if (fieldName == 'joining') {
        addEmployeePageObject.getJoiningField();
    }
    else {
        addEmployeePageObject.getRelievingField();
    }

});

Then('User selects status in status input field', () => {
    addEmployeePageObject.getstatus();
});
Then('User should be listed in the employee list', () => {
    addEmployeePageObject.getEmployeeRecordTable();
});

Then('User should view error validation message {string}', (errorMessage) => {
    addEmployeePageObject.getErrorMessage(errorMessage)
});

When("User registers with valid details", () => {
    cy.registerUser();
});
Then("User registers with valid details again", () => {
    cy.registerUser();
});

When('User clicks on the {string} button for existing user', (button) => {
    let userName = Cypress.env('userName');
    if (button == 'delete') {

        cy.get(`table .divide-y:contains(${userName})`).find('.rounded-2xl').last().click();
    }
    else {
        cy.get(`table .divide-y:contains(${userName})`).find('.inline-block').click();
        cy.generateRandomUser();
        cy.wait(1000)
    }
});

Then('Existing user should be removed from the employee list', () => {
    addEmployeePageObject.getEmployeeRecord();
});

Then("User updates {string},{string} with {string} data", (val1, val2, type) => {
    if (type === "valid") {
        addEmployeePageObject.getDobField("4/3/2024");
        addEmployeePageObject.getNameField("josha ran");

    }
    else {
        addEmployeePageObject.getDobField("244/354/23312");
        addEmployeePageObject.getSalaryField("$$$%%%%$");
    }
});
Then('User should view updated employee details in the employee list', () => {
    addEmployeePageObject.getEmployeeRecordTable();
});
Then("User should view DOB field should be corrected", () => {
    cy.get('input#dob').invoke('val')
        .then((value) => {
            cy.log('The value is: ' + value);
            expect(value).to.not.eq('244/354/23312');
        })
});

When("User checks the employee status", () => {
    cy.get('.divide-y > tr > :nth-child(7)').invoke('text').then((value) => {
        cy.wrap(value).as('val');
    })
});
    Then("Updates the status for existing user", () => {
        cy.get('@val').then((val) => {
            if (val == "active") {
                cy.get('#status').select("inactive")
            }
            else {
                cy.get('#status').select("active")
            }
        })
        cy.get('#status').invoke('val').then((value) => {
            cy.wrap(value).as('updatedVal');
        })
    });


Then("status should be updated", () => {
    cy.get('@updatedVal').then((uVal)=>{
    cy.get('.divide-y > tr > :nth-child(7)').invoke('text').then((value) => {
      expect(value).to.eq(uVal)
    });
});
});