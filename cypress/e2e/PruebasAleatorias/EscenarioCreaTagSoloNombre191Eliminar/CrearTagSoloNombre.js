import {faker} from '@faker-js/faker'
class TituloTag {
    tituloSoloTag() {
        let content=faker.random.alphaNumeric(191)
        cy.wait(3000)
        cy.get('input[name="name"]').type(content)
        cy.get('input[name="name"]').should('have.value',content)
        cy.wait(5000)
        cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click()
        cy.wait(1000)
        cy.get('button').contains('Delete tag').click()
        cy.wait(4000)
        cy.get('button').contains('Delete').click({force: true})

      
        

    }

}
export default TituloTag