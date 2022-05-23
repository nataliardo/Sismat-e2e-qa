describe('Validar Boletos', () => {
    beforeEach(() => {
        cy.viewport(1280, 720)
        
        cy.loginElevaId()
    })

        // it('Abrir boleto PDF', () => {
        //     //cy.wait(60_000)
        //     cy.visit('/?url=https://homolog-pensi.gestaoeleva.com.br/')
        //     cy.get('.pull-left > .toolbar-item').click()
        //     cy.visit('https://homolog-pensi.gestaoeleva.com.br/modules/students/dUJ1SExkQVZUNk01TlNrUnQwMnc5cWtBSmpRMkthbFFNVzZjMXgvVHZFcitwSGprNXNZPQ/view/personal-data/dUJ1SExkQVZUNk01TlNrUnQwMnc5cWdOSnpoQW1SNE9scUtzTlUwYi9HQXZpdCtF')
        //     cy.get('#tabServicescommitments_').click()
        //     cy.wait(10_000)
        //     cy.get(':nth-child(3) > :nth-child(7) > .text-top > [icon="fa-barcode"] > .default-theme > .app-button > .fa-barcode').click()
        //     //estudar como validar a aba que abriu o pdf do boleto

        // })

        it('Abrir QR Code PIX', () => {
            //cy.wait(60_000)
            cy.visit('/?url=https://homolog-pensi.gestaoeleva.com.br/')
            cy.get('.pull-left > .toolbar-item').click()
            cy.visit('https://homolog-pensi.gestaoeleva.com.br/modules/students/dUJ1SExkQVZUNk01TlNrUnQwMnc5cWtBSmpRMkthbFFNVzZjMXgvVHZFcitwSGprNXNZPQ/view/personal-data/dUJ1SExkQVZUNk01TlNrUnQwMnc5cWdOSnpoQW1SNE9scUtzTlUwYi9HQXZpdCtF')
            cy.get('#tabServicescommitments_').click()
            cy.wait(10_000)
            cy.get(':nth-child(3) > :nth-child(7) > .text-top > [tooltip="Pague com PIX"] > .default-theme > .app-button > img').click()
            cy.wait(10_000)
            cy.get('.date-arrow > img').click()
            //estudar como validar a modal que abriu o qrcode

        })
    })