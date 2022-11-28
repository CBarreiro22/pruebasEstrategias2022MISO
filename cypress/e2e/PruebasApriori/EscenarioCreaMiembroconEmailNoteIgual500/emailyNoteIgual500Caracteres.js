const aPrioriData = require("../../apriori.json");
const randomData = aPrioriData[Math.floor(Math.random() * aPrioriData.length)];

class SoloEmailCorrectoyNoteIgual500Carateres {
    soloEmailCorrectoyNoteIgual500CarateresMiembro() {

        let content = randomData['email'];
        let content2 = randomData['contenido_500'];
        
        //Email
        cy.get('input[name="email"]').type(content)
        //Validacion
        cy.get('input[name="email"]').should('have.value',content)               
        cy.wait(2000)
        //Note
        cy.get('textarea[class="gh-member-details-textarea ember-text-area gh-input ember-view"]').type(content2)
        cy.wait(2000)
        //validacion
        cy.get('textarea[class="gh-member-details-textarea ember-text-area gh-input ember-view"]').should('have.value',content2) 
        cy.wait(1000)
        cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').contains('span','Save').click()
        cy.wait(1000)
    }

}
export default SoloEmailCorrectoyNoteIgual500Carateres