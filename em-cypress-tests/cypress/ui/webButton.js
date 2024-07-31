
class WebButton {
  
    click(element) {
        element.click().then(function () {
            cy.log("The element got clicked.");
        }, function (err) {
            cy.log("--->Error: The element couldn't get clicked due to: " + err);
        });
    }

    multipleClick(element) {
        element.click({ multiple: true }).then(function () {
            cy.log("The element got clicked.");
        }, function (err) {
            cy.log("--->Error: The element couldn't get clicked due to: " + err);
        });
    }

    focusClick(element) {
        element.click({ force: true }).then(function () {
            cy.log("The element got clicked.");
        }, function (err) {
            cy.log("--->Error: The element couldn't get clicked due to: " + err);
        });
    }

    realclick(element) {
        element.realClick().then(function () {
            cy.log("The element got clicked.");
        }, function (err) {
            cy.log("--->Error: The element couldn't get clicked due to: " + err);
        });
    }

    check(element){
        element.check().then(function() {
            cy.log("The element got checked");
        }), function (err){
            cy.log("-->Error: The element couldn't get checked due to:"+ err);
        }
    }
}

export default WebButton;