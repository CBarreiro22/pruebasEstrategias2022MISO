import {faker} from '@faker-js/faker'
class CrearTagDescripcion {
    crearTagDescripcion() {
        let content2=faker.lorem.sentence()
        cy.wait(3000)
        cy.get('textarea[class="gh-input gh-tag-details-textarea"]').type(content2)
        cy.wait(3000)
        cy.get('textarea[class="gh-input gh-tag-details-textarea"]').should('have.value',content2)
        cy.wait(3000)
        cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').contains('Save').click()
        cy.wait(1000)
      
        

    }

}
export default CrearTagDescripcion
