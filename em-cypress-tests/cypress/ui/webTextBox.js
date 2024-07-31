
class WebTextBox {

    clearText(element) {
       element.clear().then(function () {
            cy.log(' Clearing of field !!!');
        }, function (err) {
            cy.log('--->Error: Clearing did not perform due to: ' + err);
        });
    }


    typeText(element, data) {
       element.type(data).then(function () {
            cy.log(' Clearing of field !!!');
         } , function (err) {
                cy.log('--->Error: Clearing did not perform due to: ' + err);
            });
     
        }
}

export default WebTextBox;