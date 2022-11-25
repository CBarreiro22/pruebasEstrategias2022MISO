const aPrioriData = require("../../apriori.json");
const randomData = aPrioriData[Math.floor(Math.random() * aPrioriData.length)];

class SinTituloContenido {
    sinTituloContenidoPost() {
        let content = randomData['sentence'];
        cy.wait(1000)
        cy.get('article[class="koenig-editor w-100 flex-grow relative center mb0 mt0 ember-view"]').type(content)
        cy.wait(1000)
        cy.get('article[class="koenig-editor w-100 flex-grow relative center mb0 mt0 ember-view"]').contains('p').should(($p)=>{
            expect($p).to.contain(content)
        })
        cy.wait(3000)
        cy.get('button[class="gh-btn gh-btn-editor gh-editor-preview-trigger"]').contains('span','Preview').click()
        cy.wait(1000)
    }

}
export default SinTituloContenido