
const mockarooUrl = Cypress.env('mockarooUrl');
const mockarooKey = Cypress.env('mockarooKey');

class TituloTag {

   

    tituloSoloTag() {
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
            
        })().catch(e => { console.error(e) });

        cy.wait(3000)
        cy.get('input[name="name"]').type(pseudo_random_data[0])
        cy.get('input[name="name"]').should('have.value',pseudo_random_data[0])
        cy.wait(5000)
        cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click()
      
        

    }

}
export default TituloTag