import {faker} from '@faker-js/faker'
class PageTitulo255 {
    pageTitulo255() {
        let content=faker.random.alphaNumeric(255)
        let content2=faker.random.alphaNumeric(16)
        cy.get('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]').type(content)          
        cy.wait(2000)
        cy.get('article[class="koenig-editor w-100 flex-grow relative center mb0 mt0 ember-view"]').type(content2)
        cy.wait(3000)
        cy.get('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]').should('have.value',content)
        cy.wait(3000)
        cy.get('button[class="gh-btn gh-btn-editor gh-editor-preview-trigger"]').contains('span','Preview').click()
        cy.wait(1000)
    }

}
export default PageTitulo255