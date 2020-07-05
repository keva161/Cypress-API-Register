Cypress.Commands.add("apiRegister", (data) => {
	cy.request({
		method: "POST",
		url: "https://docket-test.herokuapp.com/api/Register/",
		body: {
			Username: data.username,
			"Email Address": data.email,
			Password: data.password,
		},
	}).then((response) => {
		expect(response.body)
			.to.have.property("message")
			.contains("New user created!");
	});
});
