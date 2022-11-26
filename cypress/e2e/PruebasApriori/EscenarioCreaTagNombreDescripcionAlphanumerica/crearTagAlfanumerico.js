const aPrioriData = require("../../apriori.json");
const randomData = aPrioriData[Math.floor(Math.random() * aPrioriData.length)];

class CrearTagCompleto {
    RegistrarTagCompleto() {
        let content = randomData['character_field'];
        let content2 = randomData['alfa_numeric'];
        cy.wait(3000)
        cy.get('input[id="tag-name"]').type(content)
        cy.wait(1000)
        cy.get('textarea[class="gh-input gh-tag-details-textarea"]').type(content2)
        cy.wait(3000)
        cy.get('textarea[class="gh-input gh-tag-details-textarea"]').should('have.value',content2)
        cy.get('input[id="tag-name"]').should('have.value',content)
        cy.wait(3000)
        cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').contains('Save').click()
        cy.wait(1000)
    }

}
export default CrearTagCompleto