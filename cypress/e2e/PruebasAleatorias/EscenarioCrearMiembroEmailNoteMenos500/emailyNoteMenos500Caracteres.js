import {faker} from '@faker-js/faker'
class SoloEmailCorrectoyNoteMenos500Carateres {
    soloEmailCorrectoyNoteMenos500CarateresMiembro() {
        let content=faker.internet.email()
        let content2=faker.lorem.paragraph() 
        //Email
        cy.get('input[name="email"]').type(content)
        //Validacion
        cy.get('input[name="email"]').should('have.value',content)               
        cy.wait(2000)
        //Note
        cy.get('textarea[class="gh-member-details-textarea ember-text-area gh-input ember-view"]').type(content2)
        cy.wait(2000)
        //validacion
        cy.get('textarea[class="gh-member-details-textarea ember-text-area gh-input ember-view"]').should('have.value',content2) 
        cy.wait(1000)
        cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').contains('span','Save').click()
        cy.wait(1000)
    }

}
export default SoloEmailCorrectoyNoteMenos500Carateres