import {faker} from '@faker-js/faker'
class TituloyContenidoNumero {
    tituloyContenidoNumeroTag() {
        let content=faker.random.numeric(50)
        cy.wait(3000)
        cy.get('input[name="name"]').type(content)
        cy.get('input[name="name"]').should('have.value',content)
        cy.wait(3000)
        cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click()
      
        

    }

}
export default TituloyContenidoNumero