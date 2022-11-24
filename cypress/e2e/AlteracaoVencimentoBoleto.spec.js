describe('Alteração de vencimento de Boletos', () => {
    beforeEach(() => {
        cy.viewport(1280, 720)
        cy.loginElevaId()
    })

        it('Alteração de vencimento para um boleto', () => {
            //cy.wait(60_000)
            cy.visit('/?url=https://homolog-pensi.gestaoeleva.com.br/')
            cy.get('.pull-left > .toolbar-item').click()
            cy.visit('https://homolog-pensi.gestaoeleva.com.br/modules/students/dUJ1SExkQVZUNk01TlNrUnQwMnc5cTRNSkRRekxTOFcrRFJXNmRTcGptWHQ1VHVkVVdrPQ/view/personal-data/dUJ1SExkQVZUNk01TlNrUnQwMnc5cWdOSnpoQW1SNE9scUtzTlUwYi9HQXZpdCtF')
            cy.get('#tabServicescommitments_').click()
            cy.wait(8_000)
            // aqui colocar a condição do status em aberto
           // cy.wait(8_000)
            //cy.get(':nth-child(13) > :nth-child(4) > .status-name-badge > span').should('Em aberto')
            cy.get(':nth-child(6) > .text-top > .border-drop-down > app-dropdown > app-dropdown-target > .fas').click()
            cy.wait(4_000)
            cy.get('.app-button > div > img').click()
            cy.wait(8_000)
            cy.get('.reason-select > .ng-pristine > :nth-child(1) > :nth-child(1) > app-dropdown > app-dropdown-target > #ddl_ > .default-theme > .app-button > .caret').click()
            cy.get(':nth-child(1) > app-dropdown-item').click()
            //AQUI PRINT DO MODAL COM AS DATAS
            cy.get('.ng-tns-c97-7.ng-star-inserted > div.ng-star-inserted > app-button > .default-theme > .app-button').click()
            cy.wait(25_000)
            cy.get('.ng-tns-c97-9.ng-star-inserted > app-button > .default-theme > .app-button').click()
            //CHECK DATA ALTERADA (PRINT)
        
        })
})