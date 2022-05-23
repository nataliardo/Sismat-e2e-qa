// <reference types="cypress" />


describe('Edição de Dados do RF', () => {
    beforeEach(() => {
        
        cy.loginElevaId()
    })

        it('Editando Dados do RF', () => {
            //cy.wait(60_000)
            cy.visit('/?url=https://homolog-pensi.gestaoeleva.com.br/')
            cy.get('.pull-left > .toolbar-item').click()
            cy.visit('https://homolog-pensi.gestaoeleva.com.br/modules/students/dUJ1SExkQVZUNk01TlNrUnQwMnc5cWtBTGpZM0xvWmRMK2FHQ2g1cEMyTUZjbnIzTUZnPQ/view/personal-data/dUJ1SExkQVZUNk01TlNrUnQwMnc5cWdOSnpoQW1SNE9scUtzTlUwYi9HQXZpdCtF')
            cy.get('#tabResponsibles_').click()
            cy.get(':nth-child(1) > app-panel-header > .default-layout-type > app-button.ng-star-inserted > .default-theme > .app-button > .fa-pencil').click()
            cy.wait(5_000)
            cy.get(':nth-child(1) > :nth-child(2) > app-form-group > app-text-input.ng-untouched > .default-theme > div > #txt_').click().clear().type('nataliade.oliveira@elevaeducacao.com.br')
            cy.wait(5_000)
            cy.get('modal-footer.ng-tns-c97-4 > [type="Primary"] > .default-theme > .app-button').click()
            cy.wait(5_000)
            cy.contains('.toast-message', 'Dados salvos com sucesso!')
            cy.wait(8_000)
            cy.reload()
        
        })
})
//<div _ngcontent-eaj-c34="" class="toast-message ng-tns-c34-5">Dados salvos com sucesso!</div>