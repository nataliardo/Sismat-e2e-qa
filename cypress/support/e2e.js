require('cypress-xpath');
import './commands'

Cypress.on('uncaught:exception', () => {

    return false;
});

//Cypress.config('chromeWebSecurity', false);

Cypress.env({
    elevaIdUrl: 'https://homolog-eleva-id.elevaeducacao.com.br',
    geAPI: 'https://homolog-api.gestaoeleva.com.br/',
    elevaIdUser: 'robo.e2e',
    elevaIdPwd: '$aB7D9m#',
    //   APILogs: 'https://logs-service-api.development.eleva-educacao.com.br/business',
    //   APILogsToken: 'SJtkHtpQ6P3zgz8VFxdFpaOSauX6jm5iarVY7Dpe',
    //   sqsBody: null,
    //   data: dataCrator.create(),
    //   candidateIds: []
});

Cypress.Screenshot.defaults({
    screenshotOnRunFailure: true,
    capture: 'runner'
});

