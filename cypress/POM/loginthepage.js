class LoginPage{

    constructor(){

        this.username ='[id="user-name"]'
        this.password ='[name="password"]'
        this.submit ='[id="login-button"]'

    }
    typingUseName(){
        cy.get().type('standard_user')

    }
    typingPassword(){
        cy.get().type('secret_sauce')

    }
    clickingOnLoginButton(){
        cy.get().click()

    }
    
}

        
        
        