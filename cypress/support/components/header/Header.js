class Header {
    searchInput() {
        return cy.get('.menu-new-search > input')
    }

    searchButton() {
        return cy.get('.icon-search')
    }
}

export default Header