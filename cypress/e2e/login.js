
class Login {
    navigate() {
        cy.visit('/')
    }
    enterEmail(username) {
        console.log("Loging... "+username);
        cy.get('input[name="identification"]')
            .clear()
            .type(username);
        return this
    }
    enterPassword(pswd) {
        cy.get('input[name="password"]')
            .clear()
            .type(pswd)
        return this
    }
    submit() {
        cy.get('button').contains('span','Sign in').click()
    }
    
}
export default Login