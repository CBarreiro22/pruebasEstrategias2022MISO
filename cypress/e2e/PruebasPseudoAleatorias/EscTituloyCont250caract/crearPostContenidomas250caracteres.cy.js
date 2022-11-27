import Login from "../../login";
import IngresoPost from "../../ingresoPost";
import TituloyContenidomas250caracteres from "./tituloyContenidomas250caracteres";

const email = Cypress.env('email')
const password = Cypress.env('password')
const mockarooUrl = Cypress.env('mockarooUrl');
const mockarooKey = Cypress.env('mockarooKey');

describe('Testing basic Ghost', () => {
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


            pseudo_random_data.push(Object.values(dataJSON).map(data => data.title_content));
            pseudo_random_data.push(Object.values(dataJSON).map(data => data.content));



        } catch (error) {
            console.log('falla en la consulta' + error.message)
            throw error
        }

    })().catch(e => { console.error(e) }).then;



    beforeEach(() => {
        const login = new Login();
        login.navigate();
    })
    let content = pseudo_random_data[0];
    let content2 = pseudo_random_data[1];

    context('Given I access the search engine page', () => {


        context('When I write and login in the page', () => {
            beforeEach(() => {
                const login = new Login();
                login.enterEmail(email);
                login.enterPassword(password);
                cy.wait(1000)
                cy.get('input[name="identification"]').should('have.value', email)
                cy.wait(1000)
                cy.get('input[name="password"]').should('have.value', password)
                cy.wait(2000)
                login.submit();

            });

            it("Then content and title should not be empty", function () {
                const ingreso = new IngresoPost();
                const tituloContenidoPost = new TituloyContenidomas250caracteres();
                ingreso.ingresoPost();
                tituloContenidoPost.tituloyContenido250Post(content, content2);
            })
        })
    })
})
