import Login from "../../login";
import IngresoPage from "../../ingresoPage";
import TituloyContenidoNumericoPage from "./tituloyContenidoNumericoPage";

const email = Cypress.env('email')
const password = Cypress.env('password')

describe('Testing basic Ghost', () => {
    context('Given I access the search engine page', () => {
        beforeEach(()=>{
            const login = new Login();
            login.navigate();
        })
        context('When I write and login in the page', () => {
            beforeEach(()=>{
                const login = new Login();
                login.enterEmail(email);
                login.enterPassword(password);
                cy.wait(1000)
                cy.get('input[name="identification"]').should('have.value',email)
                cy.wait(1000)
                cy.get('input[name="password"]').should('have.value',password)
                cy.wait(2000)
                login.submit();
            });
 
            it("Then content and title should not be empty", function () {
                const ingreso = new IngresoPage();
                const tituloContenidoPage = new TituloyContenidoNumericoPage();
                ingreso.ingresoPage();
                tituloContenidoPage.tituloyContenidoNumericoPage();
            })
        })
    })
})