class IngresoPost {
    ingresoPost() {
        cy.wait(3000)
        cy.contains('Posts').click({force: true})
        cy.wait(4000)
        cy.contains('New post').click({force: true})      
    }
}
export default IngresoPost