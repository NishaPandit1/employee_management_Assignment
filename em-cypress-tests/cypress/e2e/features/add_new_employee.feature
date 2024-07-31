Feature: Add New Employee

    Background:
        Given User is on the "employee management" page

    Scenario: Add a new employee with valid data
        And User should view Employee List heading on Page
        When User click on the "Add Employee" button
        Then User should be redirected to page having url "add-employee"
        When User enters "userName" in the "Name" input field
        And User selects "dob" date from calendar widget
        And User enters "userSalary" in the "Salary" input field
        And User selects "joining" date from calendar widget
        And User selects "relieving" date from calendar widget
        And User enters "userNumber" in the "Contact" input field
        And User selects status in status input field
        When User click on the "Submit" button
        Then User should be listed in the employee list

    Scenario: Add a new employee with empty <Name>,<Contact> and <Salary> input field
        And User should view Employee List heading on Page
        When User click on the "Add Employee" button
        Then User should be redirected to page having url "add-employee"
        When User enters "" in the "Name" input field
        And User selects "dob" date from calendar widget
        And User enters "" in the "Salary" input field
        And User selects "joining" date from calendar widget
        And User selects "relieving" date from calendar widget
        And User enters "" in the "Contact" input field
        And User selects status in status input field
        When User click on the "Submit" button
        Then User should view error validation message "Please fill all fields."

    Scenario: Delete an existing User
        And User should view Employee List heading on Page
        When User registers with valid details
        Then User should be listed in the employee list
        When User clicks on the "delete" button for existing user
        Then Existing user should be removed from the employee list

    Scenario: Update an existing employee's details with valid data
        And User should view Employee List heading on Page
        When User registers with valid details
        Then User should be listed in the employee list
        When User clicks on the "edit" button for existing user
        Then User should be redirected to page having url "update-employee"
        And User updates "userName","dob" with "valid" data
        When User click on the "Submit" button
        Then User should view updated employee details in the employee list


    Scenario: Update an existing employee's details with invalid data
        And User should view Employee List heading on Page
        When User registers with valid details
        Then User should be listed in the employee list
        When User clicks on the "edit" button for existing user
        Then User should be redirected to page having url "update-employee"
        When User updates "dob","joining" with "invalid" data
        Then User should view DOB field should be corrected
        When User click on the "Submit" button
        Then User should view updated employee details in the employee list


    Scenario: Verify that the employee list is displayed correctly with the added/edited/deleted records
        And User should view Employee List heading on Page
        When User registers with valid details
        And User registers with valid details again
        Then User should be listed in the employee list
        When User clicks on the "delete" button for existing user
        Then User should be listed in the employee list

    Scenario: Verify that the status of an employee can be changed between "active" and "inactive"
        And User should view Employee List heading on Page
        When User registers with valid details
        Then User should be listed in the employee list
        And User checks the employee status
        When User clicks on the "edit" button for existing user
        And Updates the status for existing user
        And User click on the "Submit" button
        Then status should be updated