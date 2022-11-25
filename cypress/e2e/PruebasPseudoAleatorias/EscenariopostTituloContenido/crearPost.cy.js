import Login from "../../login";


const email = Cypress.env('email')
const password = Cypress.env('password')
const mockarooUrl = Cypress.env('mockarooUrl');
const mockarooKey = Cypress.env('mockarooKey');

describe('Testing basic Ghost', () => {

    context('Given I access the search engine page', () => {
        beforeEach(() => {
            const login = new Login();
            login.navigate();
        })


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

            let valor;

            (async function () {
                try {
                    var myHeaders = new Headers();
                    myHeaders.append("Cookie", "layer0_bucket=74; layer0_destination=default; layer0_environment_id_info=1680b086-a116-4dc7-a17d-9e6fdbb9f6d9");

                    var requestOptions = {
                        method: 'GET',
                        headers: myHeaders,
                        redirect: 'follow'
                    };
                    const response = fetch( mockarooUrl+ "?count=2&key="+ mockarooKey, requestOptions);
                    const data = response.text();
                    const dataJSON = JSON.parse(data);

                    valor = Object.values(dataJSON).map(data => data.test_data);
                    console.log(valor);
                } catch (error) {
                    console.log('That did not go well.')
                    throw error
                }
            })().catch(e => { console.error(e) })

            let content = valor[0];
            let content2 = valor[1];
            
            it("Then content and title should not be empty", () => {
                console.log("valores: " + content + "...." + content2);

                cy.wait(3000)
                cy.contains('Posts').click({ force: true })
                cy.wait(4000)
                cy.contains('New post').click({ force: true })






                cy.wait(3000)
                cy.get('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]').type(content)
                cy.wait(1000)
                cy.get('article[class="koenig-editor w-100 flex-grow relative center mb0 mt0 ember-view"]').type(content)
                cy.wait(3000)
                cy.get('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]').should('have.value', content)
                cy.get('article[class="koenig-editor w-100 flex-grow relative center mb0 mt0 ember-view"]').contains('p').should(($p) => {
                    expect($p).to.contain(content2)
                })
                cy.wait(3000)
                cy.get('button[class="gh-btn gh-btn-editor gh-editor-preview-trigger"]').contains('span', 'Preview').click()
                cy.wait(1000)
            })
        })
    })
})