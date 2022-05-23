import 'cypress-localstorage-commands';
/// <reference types="cypress-localstorage-commands" />

Cypress.Commands.add('loginElevaId', () => {
return cy.request({
    method: 'POST',
    url: Cypress.env('elevaIdUrl') + '/?redirect_uri=',
    body: {
    username: Cypress.env('elevaIdUser'),
    password: Cypress.env('elevaIdPwd')
    }
})
    .then((resp) => {
		const cookies = resp.headers["set-cookie"];

		if (cookies) {
			const authToken = cookies.find(token => token.includes("eleva-oauth2"));
			const accessTokenWithLicenses = authToken.split(';')[0];
			const accessToken = accessTokenWithLicenses.split('oauth2=')[1];

			localStorage.setItem('access_token', accessToken);
cy.setLocalStorage('access_token', accessToken);
			Cypress.env({
				access_token: accessToken
			});
			return;
		}

		throw new Error("AuthToken Not Found");

}, (err) => console.log("LOGIN ERROR ===>", err));
});