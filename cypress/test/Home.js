import HomePage from '../pageObjects/HomePage'
import Header from '../pageObjects/Header'
import SearchPage from '../pageObjects/SearchPage'

Cypress.on('uncaught:exception', (err, runnable) => {
    // prevent Cypress from failing the test
    return false
  })

describe('', function() {
    it('', function() {
        const homePage = new HomePage()
        const header = new Header()
        const searchPage = new SearchPage()
        
        homePage.visit()
        
        header.getSearch().type('iPhone')
        header.getSearchButton().click()
        
        searchPage.getTab(searchPage.TAB_LOJA).click() 

        const maxPrice = 949.99
        searchPage.getDevicesUnderPrice(maxPrice).then(deviceList => {
            expect(deviceList.length).to.be.at.least(1)
            
            deviceList.forEach(device => {
                const price = device.price

                expect(price).to.be.at.most(maxPrice)
            })
        })
        
    })
})