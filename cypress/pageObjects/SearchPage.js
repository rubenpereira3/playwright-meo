class SearchPage {
    constructor()  {
        this.TAB_TUDO = 'Tudo'
        this.TAB_LOJA = 'Loja'
        this.TAB_AJUDA = 'Ajuda'
    }

    getTab(tabName) {
        return cy.get(`.tabs > * button[title=${tabName}]`)
    }

    getDevicesUnderPrice(maxPrice) {
        const deviceList = []
        cy.get('.shopping-component > * .item').each(productItem => {
            cy.wrap(productItem).find('[data-testid="price"]').each(priceItem => {
                const priceText = priceItem.text()
                const price = Number(priceText.replace('€', '').replace(',', '.'))

                if (price <= maxPrice) {
                    cy.wrap(productItem).find('.title').then(titleElement => {
                        const productTitle = titleElement.text()
                        deviceList.push({ 'title': productTitle, 'price': price})
                    })
                }
            })
        })

        return cy.wrap(deviceList)
    }
}

export default SearchPage