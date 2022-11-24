
class IngresoPage {
    ingresoPage(){
        cy.wait(1000)
        cy.contains('a','Pages').click()
        cy.wait(1000)
        cy.get('a[class="ember-view gh-btn gh-btn-primary view-actions-top-row"]').contains('span','New page').click()
    }

}
export default IngresoPage