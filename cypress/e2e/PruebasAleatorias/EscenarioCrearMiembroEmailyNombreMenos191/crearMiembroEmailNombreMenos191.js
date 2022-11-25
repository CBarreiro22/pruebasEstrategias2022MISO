import {faker} from '@faker-js/faker'
class CrearMiembroEmailNombreMenos191 {
    crearMiembroEmailNombreMas191() {
        let content=faker.internet.email()
        let content2 = faker.lorem.sentence()
        //Name
        cy.get('input[name="name"]').type(content2)
        //validation
        cy.get('input[name="name"]').should('have.value',content2)
        //Email
        cy.get('input[name="email"]').type(content)
        //validation
        cy.get('input[name="email"]').should('have.value',content)  
        cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').contains('span','Save').click()
        cy.wait(1000)
    }

}
export default CrearMiembroEmailNombreMenos191