const aPrioriData = require("../../apriori.json");
const randomData = aPrioriData[Math.floor(Math.random() * aPrioriData.length)];

class CrearMiembroEmailNombreMas191 {
    crearMiembroEmailNombreMas191() {
        let content = randomData['email'];
        let content2 = randomData['contenido_mas_191'];
        //Name
        cy.get('input[name="name"]').type(content2)
        //validation
        cy.get('input[name="name"]').should('have.value',content2)
        //Email
        cy.get('input[name="email"]').type(content)
        //validation
        cy.get('input[name="email"]').should('have.value',content)  
        cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').contains('span','Save').click()
        cy.wait(1000)
    }

}
export default CrearMiembroEmailNombreMas191