import {faker} from '@faker-js/faker'
class CrearTagVacio {
    crearTagVacio() {
        let content=faker.lorem.word(10)
        cy.wait(3000)
        cy.get('input[id="tag-name"]').type(content)
        cy.wait(3000)
        cy.get('input[id="tag-name"]').clear()  
        cy.wait(1000) 
        cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').contains('Save').click()
        cy.wait(1000)
    }
}
export default CrearTagVacio
        

