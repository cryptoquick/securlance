describe('Sapper template app', () => {
	beforeEach(() => {
		cy.visit('/')
	});

	it('has the correct <h1>', () => {
		cy.contains('h1', 'Frisky Market').should('exist')
	});

	it.skip('navigates to /art', () => {
		cy.get('nav a').contains('Art').click();
		cy.url().should('include', '/art');
		cy.contains('h1', 'Art').should('exist');
	});

	it('navigates to /artists', () => {
		cy.get('nav a').contains('Artists').click();
		cy.url().should('include', '/artists');
		cy.contains('h1', 'Artists').should('exist');
	});

	it('navigates to /about', () => {
		cy.get('nav a').contains('About').click();
		cy.url().should('include', '/about');
		cy.contains('h1', 'About').should('exist');
	});

	it('navigates to /blog', () => {
		cy.get('nav a').contains('Blog').click();
		cy.url().should('include', '/blog');
		cy.contains('h1', 'Recent posts').should('exist');
	});
});