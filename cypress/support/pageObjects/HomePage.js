import Header from '../components/header/Header'

class HomePage {
    constructor() {
        this.header = new Header()
    }
    
    visit() {
        return cy.visit('/')
    }
}

export default HomePage