const aPrioriData = require("../../apriori.json");
const randomData = aPrioriData[Math.floor(Math.random() * aPrioriData.length)];

class TituloyContenido {
    tituloyContenidoPost() {
        let content = randomData['character_field'];
        let content2 = randomData['sentence'];
        let content3 = randomData['alfa_numeric'];
  
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
        cy.get('a').contains('Posts').click()
        cy.wait(1000)
        cy.get('a[class="ember-view permalink gh-list-data gh-post-list-title"]').contains('h3',content).click()
        cy.wait(1000)
        cy.get('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]').clear()
        cy.get('article[class="koenig-editor w-100 flex-grow relative center mb0 mt0 ember-view"]').clear()
        cy.wait(1000)
        cy.get('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]').type(content3)
        cy.wait(1000)
        cy.get('article[class="koenig-editor w-100 flex-grow relative center mb0 mt0 ember-view"]').type(content3)
        cy.wait(1000)
        cy.get('button[class="gh-btn gh-btn-editor gh-editor-preview-trigger"]').contains('span','Preview').click()
    }

}
export default TituloyContenido