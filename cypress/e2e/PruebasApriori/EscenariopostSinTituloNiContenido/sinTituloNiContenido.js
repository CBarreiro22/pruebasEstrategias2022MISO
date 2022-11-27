const aPrioriData = require("../../apriori.json");
const randomData = aPrioriData[Math.floor(Math.random() * aPrioriData.length)];


class SinTituloNiContenido {
    sinTituloNiContenidoPost() {
        let content = randomData['character_field'];
        cy.get('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]').type(content)
        cy.wait(1000)

        cy.get('article[class="koenig-editor w-100 flex-grow relative center mb0 mt0 ember-view"]').click();
        cy.wait(1000)
        cy.get('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]').clear()
        cy.wait(1000)
        cy.get('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]').should('have.value','')
        cy.wait(1000)
        cy.get('button[class="gh-btn gh-btn-editor gh-editor-preview-trigger"]').contains('span','Preview').click()
        cy.wait(1000)
    }

}
export default SinTituloNiContenido