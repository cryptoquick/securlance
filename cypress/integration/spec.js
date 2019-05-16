describe('Sapper template app', () => {
	beforeEach(() => {
		cy.visit('/')
	});

	it('has the correct <h1>', () => {
		cy.contains('h1', 'SecurLance').should('exist')
	});

	it('navigates to /invoice', () => {
		cy.get('nav a').contains('Invoice').click();
		cy.url().should('include', '/invoice');
		cy.contains('h1', 'Invoice').should('exist');
	});

	it('navigates to /about', () => {
		cy.get('nav a').contains('About').click();
		cy.url().should('include', '/about');
		cy.contains('h1', 'About').should('exist');
	});

	it('navigates to /account', () => {
		cy.get('nav a').contains('Account').click();
		cy.url().should('include', '/account');
		cy.contains('h1', 'Account').should('exist');
	});
});
