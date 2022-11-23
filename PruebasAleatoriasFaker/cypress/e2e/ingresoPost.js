class IngresoPost {
    ingresoPost() {
        cy.wait(3000)
        cy.get('a[href="#/posts/"]').contains('Posts').click({force: true})
        cy.wait(4000)
        cy.contains('New post').click({force: true})      
    }
}
export default IngresoPost