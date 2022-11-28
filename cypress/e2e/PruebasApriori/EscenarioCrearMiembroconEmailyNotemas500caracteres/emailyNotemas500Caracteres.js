const aPrioriData = require("../../apriori.json");
const randomData = aPrioriData[Math.floor(Math.random() * aPrioriData.length)];

class SoloEmailCorrectoyNote500Carateres {
    soloEmailCorrectoyNote500CarateresMiembro() {

        let content = randomData['email'];
        let content2 = randomData['contenido_menos_500'];
        cy.get('input[name="email"]').type(content)
        cy.get('input[name="email"]').should('have.value',content)               
        cy.wait(2000)
        cy.get('textarea[class="gh-member-details-textarea ember-text-area gh-input ember-view"]').type(content2)
        cy.wait(2000)
        cy.get('textarea[class="gh-member-details-textarea ember-text-area gh-input ember-view"]').should('have.value',content2) 
        cy.wait(1000)
        cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').contains('span','Save').click()
        cy.wait(1000)
    }

}
export default SoloEmailCorrectoyNote500Carateres