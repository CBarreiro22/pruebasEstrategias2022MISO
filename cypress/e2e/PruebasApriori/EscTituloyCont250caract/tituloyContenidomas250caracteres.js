const aPrioriData = require("../../apriori.json");
const randomData = aPrioriData[Math.floor(Math.random() * aPrioriData.length)];

class TituloyContenidomas250caracteres {
    tituloyContenido250Post() {
        let content = randomData['naughty_string'];
        let content2 = randomData['titulo_250'];
        cy.wait(3000)
        cy.get('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]').type(content)
        cy.wait(1000)
        cy.get('article[class="koenig-editor w-100 flex-grow relative center mb0 mt0 ember-view"]').type(content2)
        cy.wait(3000)
        cy.get('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]').should('have.value',content)
        cy.get('article[class="koenig-editor w-100 flex-grow relative center mb0 mt0 ember-view"]').contains('p').should(($p)=>{
            expect($p).to.contain(content2)
        })
        cy.wait(3000)
        cy.get('button[class="gh-btn gh-btn-editor gh-editor-preview-trigger"]').contains('span','Preview').click()
        cy.wait(1000)
    }

}
export default TituloyContenidomas250caracteres