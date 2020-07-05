/// <reference types="Cypress" />

let user;

describe("Docket Post Test", () => {
	before(function () {
		cy.task("freshUser").then((object) => {
			user = object;
		});
	});

	it("Register a new user", () => {
		cy.apiRegister({
			username: user.username,
			email: user.email,
			password: user.password,
		});
	});
});
