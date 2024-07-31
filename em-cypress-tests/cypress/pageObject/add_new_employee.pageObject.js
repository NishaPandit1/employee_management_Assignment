import addEmployee from "../pages/add_new_employee.page";
import GenericHelpers from '../utilities/genericHelpers';
import Testbox from "../ui/webTextBox";
import WebButton from '../ui/webButton';
import WebSelectBox from "../ui/webSelectBox";
import genericActions from "../utilities/genericActions";
import WebText from "../ui/webText";
const add_Employee = new addEmployee();
const genericHelpers = new GenericHelpers();
const webButton = new WebButton();
const webTextBox = new Testbox();
const webSelectBox = new WebSelectBox();
const webText = new WebText();
const GenericActions = new genericActions();


class addNewEmployeePageObject {

  getTitle() {
    genericHelpers.elementIsDisplayed(add_Employee.getHeading());
  }
  getUrl(url) {
    GenericActions.checkUrl(url);
  }
  getSubmitButton() {
    webButton.click(add_Employee.getSubmitButton());
  }
  getAddEmployeeButton() {
    webButton.click(add_Employee.getAddEmployeeButton());
  }

  getNameField(inputValue) {
    if (inputValue == "") {
      webButton.click(add_Employee.getNameInputField());
    }
    else if (inputValue != null) {
      Cypress.env('userName', inputValue);
      webTextBox.clearText(add_Employee.getNameInputField())
      webTextBox.typeText(add_Employee.getNameInputField(), inputValue)
    }
    else {
      cy.generateRandomUser();
      webTextBox.clearText(add_Employee.getNameInputField())
      cy.fixture('randomUser.json').then((testdata) => {
        webTextBox.typeText(add_Employee.getNameInputField(), testdata.userName);
        Cypress.env('userName', testdata.userName);
      })
    }
  }
  getSalaryField(inputValue) {
    if (inputValue == "") {
      webTextBox.clearText(add_Employee.getSalaryInputField())
      webButton.click(add_Employee.getSalaryInputField());
    }
    else if (inputValue != null) {
      webTextBox.typeText(add_Employee.getSalaryInputField(), inputValue)
    }

    else {
      webTextBox.clearText(add_Employee.getSalaryInputField())
      cy.fixture('randomUser.json').then((testdata) => {
        webTextBox.typeText(add_Employee.getSalaryInputField(), testdata.salary)
      })
    }
  }
  getContactField(inputValue) {
    if (inputValue == "") {
      webButton.click(add_Employee.getContactInputField());
    }
    else {
      cy.fixture('randomUser.json').then((testdata) => {
        webTextBox.typeText(add_Employee.getContactInputField(), testdata.contact)
      })
    }
  }

  getDobField(value) {
    if (value) {
      webTextBox.clearText(add_Employee.getDobInputField())
      webTextBox.typeText(add_Employee.getDobInputField(), value)
    }
    else {
      webTextBox.clearText(add_Employee.getDobInputField())
      cy.fixture('randomUser.json').then((testdata) => {
        Cypress.env('userDob', testdata.dob);
        webTextBox.typeText(add_Employee.getDobInputField(), testdata.dob)
      })
    }
  }

  getJoiningField(inputValue) {
    if (inputValue != null) {
      webButton.focusClick(add_Employee.getJoiningDateInputField())
      webTextBox.clearText(add_Employee.getJoiningDateInputField())
      webTextBox.typeText(add_Employee.getJoiningDateInputField(), inputValue)
    }
    else {
      webButton.focusClick(add_Employee.getJoiningDateInputField())
      webTextBox.clearText(add_Employee.getJoiningDateInputField())
      cy.fixture('randomUser.json').then((testdata) => {
        webTextBox.typeText(add_Employee.getJoiningDateInputField(), testdata.joining)
      })
    }
  }

  getRelievingField() {
    webButton.focusClick(add_Employee.getRelievingDateInputField())
    webTextBox.clearText(add_Employee.getRelievingDateInputField())
    cy.fixture('randomUser.json').then((testdata) => {
      webTextBox.typeText(add_Employee.getRelievingDateInputField(), testdata.relieving)
    })
  }
  getstatus() {
    cy.fixture('randomUser.json').then((testdata) => {
      webSelectBox.selectDropDownUsingText(add_Employee.getStatus(), testdata.status)
    })
  }
  getErrorMessage(errorMessage) {
    genericHelpers.elementIsDisplayed(add_Employee.getErrorMessage(errorMessage));
  }
  getEmployeeRecordTable() {
    let userName = Cypress.env('userName');
    webText.shouldContainText(add_Employee.getEmployeeRecordTable(), userName);
  }
  getEmployeeRecord() {
    let userName = Cypress.env('userName');
    genericHelpers.elementIsNotDisplayed(add_Employee.getEmployeeRecordTable(), userName);
  }
}

export default addNewEmployeePageObject;