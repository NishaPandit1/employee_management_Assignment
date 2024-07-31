const heading = 'div .text-xl';
const addEmployeeButton = "div .inline-block:first()";
const nameInputField = "input#name";
const dobInputField = "input#dob";
const salaryInputField = "input#salary";
const joiningDateInputField = "input[id='joining date']";
const relievingDateInputField =".react-datepicker-wrapper input:last()";
const contactInputField ="input#contact";
const status ="#status";
const submitButton ="button";
const errorMessage = "div";
const employeeRecordTable ='table .divide-y';

class addEmployee {

   getHeading(){
    return cy.get(heading);
  }

  getAddEmployeeButton(){
    return cy.get(addEmployeeButton)
  }

  getNameInputField(){
    return cy.get(nameInputField)
  }

  getDobInputField(){
    return cy.get(dobInputField)
  }
  
  getSalaryInputField(){
    return cy.get(salaryInputField)
  }
  getJoiningDateInputField(){
    return cy.get(joiningDateInputField)
  }
  getRelievingDateInputField(){
    return cy.get(relievingDateInputField)
  }
  getContactInputField(){
    return cy.get(contactInputField)
  }
  getStatus(){
    return cy.get(status)
  }
  getSubmitButton(){
    return cy.get(submitButton)
  }
  getErrorMessage(message){
    return cy.get(`${errorMessage}:contains('${message}')`)
  }
  getEmployeeRecordTable(){
    return cy.get(employeeRecordTable);
  }
}

export default addEmployee;
