class IngresoTag {
    ingresoTag() {
        cy.wait(3000)
        cy.contains('Tags').click({force: true})
        cy.wait(4000)
        cy.contains('New tag').click({force: true})      
    }
}
export default IngresoTag