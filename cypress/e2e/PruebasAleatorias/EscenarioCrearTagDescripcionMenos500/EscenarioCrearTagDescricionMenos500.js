import {faker} from '@faker-js/faker'
class CrearTagDescripcionMenos500 {
    crearTituloDescripcionMenos500() {
        let content=faker.lorem.paragraph(1)
        let content2=faker.lorem.sentence(20)
        cy.wait(3000)
        cy.get('input[id="tag-name"]').type(content)
        cy.wait(3000)
        cy.get('textarea[class="gh-input gh-tag-details-textarea"]').type(content2)
        cy.wait(3000)
        cy.get('textarea[class="gh-input gh-tag-details-textarea"]').should('have.value',content2)
        cy.get('input[id="tag-name"]').should('have.value',content)
        cy.wait(3000)
        cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').contains('Save').click()
        cy.wait(1000)
      
        

    }

}
export default CrearTagDescripcionMenos500


