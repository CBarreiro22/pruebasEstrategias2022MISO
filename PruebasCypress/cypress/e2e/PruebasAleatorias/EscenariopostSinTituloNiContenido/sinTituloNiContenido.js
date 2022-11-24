import {faker} from '@faker-js/faker'
class SinTituloNiContenido {
    sinTituloNiContenidoPost() {
        cy.get('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]').type(faker.lorem.sentence(1))
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