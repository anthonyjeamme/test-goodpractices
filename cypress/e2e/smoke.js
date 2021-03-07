describe('app', () => {
	it('works', () => {
		cy.visit('/')
		cy.findAllByText(/test/).click()
		cy.findAllByText('Hi from the second page')
	})
})
