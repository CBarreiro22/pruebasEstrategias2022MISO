import Login from "../../login";
import ingresoMiembro from "../../ingresoMiembro";
import CrearMiembro from "./crearMiembro"

const email = Cypress.env('email')
const password = Cypress.env('password')
const mockarooUrl = Cypress.env('mockarooUrl');
const mockarooKey = Cypress.env('mockarooKey');

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
            let pseudo_random_data = new Array;

            (async function () {

                try {
                    var myHeaders = new Headers();
                    myHeaders.append("Cookie", "layer0_bucket=74; layer0_destination=default; layer0_environment_id_info=1680b086-a116-4dc7-a17d-9e6fdbb9f6d9");

                    var requestOptions = {
                        method: 'GET',
                        headers: myHeaders,
                        redirect: 'follow'
                    };
                    const response = await fetch(mockarooUrl + "?count=1&key=" + mockarooKey, requestOptions);

                    const data = await response.text();
                    console.log(data);
                    const dataJSON = JSON.parse(data);


                    pseudo_random_data.push(Object.values(dataJSON).map(data => data.test_data));
                    pseudo_random_data.push(Object.values(dataJSON).map(data => data.email));
                    pseudo_random_data.push(Object.values(dataJSON).map(data => data.first_name));
                    pseudo_random_data.push(Object.values(dataJSON).map(data => data.last_name));


                } catch (error) {
                    console.log('falla en la consulta' + error.message)
                    throw error
                }

            })().catch(e => { console.error(e) });

            let content = pseudo_random_data[2];
            let content2 = pseudo_random_data[1];
            let content3 = pseudo_random_data[0];
            it("Then the title and content should be empty", function () {
                const ingreso = new ingresoMiembro();
                const crearMiembro = new CrearMiembro();
                ingreso.ingresoMiembro();
                crearMiembro.crearMiembro(content, content2, content3);
            })
        })
    })
})