
class CrearMiembro {
    crearMiembro(content, content2, content3) {
       
        //Name
        cy.get('input[name="name"]').type(content3)
        //validation
        cy.get('input[name="name"]').should('have.value',content3)
        //Email
        cy.get('input[name="email"]').type(content)
        //validation
        cy.get('input[name="email"]').should('have.value',content)  
        //label
        cy.get('input[class="ember-power-select-trigger-multiple-input"]').type(content3);             
        cy.wait(2000)
        //Note
        cy.get('textarea[class="gh-member-details-textarea ember-text-area gh-input ember-view"]').type(content2)
        cy.wait(2000)
        //validation
        cy.get('textarea[class="gh-member-details-textarea ember-text-area gh-input ember-view"]').should('have.value',content2) 
        cy.wait(1000)
        cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').contains('span','Save').click()
        cy.wait(1000)
    }

}
export default CrearMiembro