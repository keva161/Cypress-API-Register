const faker = require("faker");

module.exports = (on, config) => {
	on("task", {
		freshUser() {
			user = {
				username: faker.name.firstName(),
				email: faker.internet.email(),
				password: "SuperSecret",
			};
			return user;
		},
	});
};
