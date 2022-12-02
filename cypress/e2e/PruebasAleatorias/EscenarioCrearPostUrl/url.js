import {faker} from '@faker-js/faker'
class TituloyContenido {
    tituloyContenidoPost() {
        let content=faker.lorem.slug()
        let content2=("www.google.com");
        cy.wait(3000)//
        cy.get('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]').type(content).type('{enter}');
        
        cy.wait(1000)
        cy.get('#ember119 > button').click();
        cy.wait(3000)
        cy.get('.f-small.lh-heading.tracked-1.fw4.ma0.ml4.flex-grow-1.midlightgrey.truncate').clear();
        cy.wait(3000);
        cy.get('input[class="miw-100 pa2 ba br2 b--lightgrey-d2 f7 form-text lh-title tracked-2 h10 nl2 nr2"]').type(content2).click();
        cy.wait(3000);
        cy.get('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]').should('have.value',content)
        cy.get('article[class="koenig-editor w-100 flex-grow relative center mb0 mt0 ember-view"]').contains('p').should(($p)=>{
            expect($p).to.contain(content2)
        })
        cy.wait(3000)
        cy.get('button[class="gh-btn gh-btn-editor gh-editor-preview-trigger"]').contains('span','Preview').click()
        cy.wait(1000)
    }

}
export default TituloyContenido