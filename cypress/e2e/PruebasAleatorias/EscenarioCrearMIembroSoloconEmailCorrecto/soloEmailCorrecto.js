import {faker} from '@faker-js/faker'
class SoloEmailCorrecto {
    soloEmailCorrectoMiembro() {
        let content=faker.internet.email()
        cy.get('input[name="email"]').type(content)
        cy.get('input[name="email"]').should('have.value',content)               
        cy.wait(1000)
        cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').contains('span','Save').click()
        cy.wait(1000)
    }

}
export default SoloEmailCorrecto