import {faker} from '@faker-js/faker'
class IngresoPost {
    ingresoPost() {
        cy.wait(3000)
        cy.get('a[href="#/posts/"]').contains('Posts').click({force: true})
        cy.wait(4000)
        cy.contains('New post').click({force: true})
        cy.wait(3000)
        let content=faker.lorem.slug()
        let content2=faker.lorem.paragraph(7)
        cy.get('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]').type(content)
        cy.wait(1000)
        cy.get('article[class="koenig-editor w-100 flex-grow relative center mb0 mt0 ember-view"]').type(content2)
        cy.wait(3000)
        cy.get('article[class="koenig-editor w-100 flex-grow relative center mb0 mt0 ember-view"]').contains('p').should(($p)=>{
            expect($p).to.contain(content2)
        })
        cy.wait(3000)
        cy.get('button[class="gh-btn gh-btn-editor gh-editor-preview-trigger"]').contains('span','Preview').click()
        cy.wait(1000)
       /*  cy.get('a[class="ember-view gh-btn-editor gh-editor-back-button"]').contains('span','Posts').click()
        cy.wait(3000) */
        
        
    }
}
export default IngresoPost