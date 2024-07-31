
class WebXpath {
 setXpathValue(type,word){
        
        let xpathString = '';

        if(type === 'visibleText'){
            xpathString = `//*[contains(text(),'${word}')]`
        }
        else{
            xpathString = `//*[contains(@${type},'${word}')]`
        }

        return xpathString;
    }

    clickByXpath(type,webElem){
        let getXpathValue = this.setXpathValue(type,webElem);
        cy.xpath(getXpathValue).click().then(function () {
            cy.log("The element got clicked.");
        }, function (err) {
            cy.log("--->Error: The element couldn't get clicked due to: " + err);
        });
    }

    typeTextByXpath(type,word){
        let getXpathValue = this.setXpathValue(type,word);
        cy.xpath(getXpathValue).clear().type(word).then(function () {
            cy.log('Typing of the field with value: ' + data);
        }, function (err) {
            cy.log('--->Error: Typing of the field with value:' + data + ' was not done due to: ' + err);
        });
    }

    shouldContainTextByXpath(type,text) {
        let getXpathValue = this.setXpathValue(type,text);
        cy.xpath(getXpathValue).should('be.visible').then(function (text) {
            cy.log("The element is have: " + text);

        }, function (err) {
            cy.log("--->Error: The element dosn't have text due to: " + err);
        });

    }

}

export default WebXpath;