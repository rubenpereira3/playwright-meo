import HomePage from '../support/pageObjects/HomePage'
import SearchPage from '../support/pageObjects/SearchPage'

describe('Meo search', function() {
    const homePage = new HomePage()
    const searchPage = new SearchPage()
    
    before(function() {
        cy.fixture('example.json').then(data => {
            this.searchKeyword = data.searchKeyword
            this.maxPrice = data.maxPrice
        }) 
    })

    it('Get all devices with price lower than specified', function() {
        homePage.visit()
        
        homePage.header.searchInput().type(this.searchKeyword)
        homePage.header.searchButton().click()

        searchPage.tab(searchPage.TAB_LOJA).click() 

        searchPage.getDevicesUnderPrice(this.maxPrice).then(deviceList => {
            expect(deviceList.length).to.be.at.least(1)
            
            deviceList.forEach(device => {
                const price = device.price
                expect(price).to.be.at.most(this.maxPrice)
            })
        })
        
    })
})