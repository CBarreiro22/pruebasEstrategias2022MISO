
class CrearTagCompleto {
    RegistrarTagCompleto(content) {
        
        cy.wait(3000)
        cy.get('input[id="tag-name"]').type(content)
        cy.wait(1000)
        cy.get('input[id="tag-name"]').should('have.value',content)
        cy.wait(3000)
        cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').contains('Save').click()
        cy.wait(1000)
    }

}
export default CrearTagCompleto