
class WebText {
   
    getText(element) {
        try {

        return cy.get(element).invoke('text').then(function (text) {
                    cy.log("The text of element is captured which is: " + text);
                    
                })
           
        }
        catch (err) {
            cy.log("--->Error: The text of the element couldn't be captured due to: " + err);
        }
    }


    shouldHaveText(element, text) {
        cy.get(element).should("have.text", text).then(function (text) {

            cy.log("The element is have: " + text);

        }, function (err) {
            cy.log("--->Error: The element dosn't have text due to: " + err);
        });

    }

    shouldHaveValue(element, value) {
        cy.get(element).should('have.value', value).then(function (text) {

            cy.log("The element have value: " + value);

        }, function (err) {
            cy.log("--->Error: The element dosn't have value due to: " + err);
        });

    }


    shouldContainText(element, text) {
       element.should("contain", text).then(

          function (text) {
            cy.log("             The element contain: " + text);
          },
          function (err) {
            cy.log("--->Error: The element dosn't contain text due to: " + err);
          }
        );
      }

    verifyExactText(element, expectedtext) {
        try {

            if ( cy.get(element).should('have.text', expectedtext)) {

                cy.log("The Expected Text matches the actual " + expectedtext);
            }
            else {
                cy.log("The Expected Text does not matches the actual " + expectedtext);
            }
        }
        catch (err) {
            cy.log("There was an Exception in the comparison of Text");
        }
    }

    verifyPartialText(element, expectedtext) {
        cy.get(element).should('contain', expectedtext).then(

            function (text) {
                cy.log("The Expected Text matches the actual " + expectedtext);
            },
            function (err) {
                cy.log("The Expected Text does not matches the actual " + expectedtext);
            }
          );
        }
       
      

    verifyExactAttribute(element, attribute, value) {
        try {

            if ( element.invoke('attr', attribute).should('equal', value)) {

                cy.log("The expected attribute: " + attribute + " value matches the actual " + value);
            }
            else {
                cy.log("The expected attribute: " + attribute + " value does not matches the actual " + value);
            }
        }
        catch (err) {
            cy.log("There was an Exception in the comparison of attibute value");
        }

    }

    verifyPartialAttribute(element, attribute, value) {

        try {

            if ( cy.get(element).invoke('attr', attribute).should('contain', value)) {

                cy.log("The expected attribute: " + attribute + " value matches the actual " + value);
            }
            else {
                cy.log("The expected attribute: " + attribute + " value does not matches the actual " + value);
            }
        }
        catch (err) {
            cy.log("There was an Exception in the comparison of attibute value");
        }
    }
}

export default WebText;