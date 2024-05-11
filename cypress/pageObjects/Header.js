class Header {
    getSearch() {
        return cy.get('.menu-new-search > input')
    }

    getSearchButton() {
        return cy.get('.icon-search')
    }
}

export default Header