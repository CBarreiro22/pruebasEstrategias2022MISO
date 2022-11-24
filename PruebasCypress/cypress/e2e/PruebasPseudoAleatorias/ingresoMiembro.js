class ingresoMiembro {
    ingresoMiembro() {
        cy.wait(1000)
        cy.contains('Members').click({force: true})
        cy.wait(2000)
        cy.get('a[class="ember-view gh-btn gh-btn-primary"]').contains('span','New member').click()
        cy.wait(1000)              
    }
}
export default ingresoMiembro