describe("Signup App", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/signup");
    });

    const firstNameInput = () => cy.get("input[name='firstName']");
    const lastNameInput = () => cy.get("input[name='lastName']");
    const emailInput = () => cy.get("input[name='email']");
    const usernameInput = () => cy.get("input[name='username']");
    const passwordInput = () => cy.get("input[name='password']");
    const submitButton = () => cy.get("button[name='disabledButtSignup']");

    it("makes sure that tests work", () => {
        expect(1 + 1).to.equal(2);
        expect(2 * 2).to.equal(4);
        expect(6 - 5).not.to.equal(6);
    });

    it("can make sure DOM elements exists", () => {
        firstNameInput().should("exist");
        lastNameInput().should("exist");
        emailInput().should("exist");
        usernameInput().should("exist");
        passwordInput().should("exist");
        submitButton().should("exist");

        cy.contains("Sign Up");
    });

    it("can type inside the inputs", () => {
        firstNameInput()
            .should("have.value", "")
            .type("firstname")
            .should("have.value", "firstname");
        lastNameInput()
            .should("have.value", "")
            .type("lastname")
            .should("have.value", "lastname");
        emailInput()
            .should("have.value", "")
            .type("email@email.com")
            .should("have.value", "email@email.com");
        usernameInput()
            .should("have.value", "")
            .type("username")
            .should("have.value", "username");
        passwordInput()
            .should("have.value", "")
            .type("password")
            .should("have.value", "password");
    });

    it("should disable submitting signup info until all inputs have been filled out", () => {
        submitButton().should("be.disabled");
        firstNameInput().should("have.value", "");
        lastNameInput().should("have.value", "");
        emailInput().should("have.value", "");
        usernameInput().should("have.value", "");
        passwordInput().should("have.value", "");
        submitButton().should("be.disabled");
        firstNameInput().type("firstname");
        submitButton().should("be.disabled");
        lastNameInput().type("lastname");
        submitButton().should("be.disabled");
        emailInput().type("email@email.com");
        submitButton().should("be.disabled");
        usernameInput().type("username");
        submitButton().should("be.disabled");
        passwordInput().type("password");
        submitButton().should("be.not.disabled");
        firstNameInput().clear();
        cy.contains("First name is a required field");
        lastNameInput().clear();
        cy.contains("Last name is a required field");
        emailInput().clear();
        cy.contains("Email address is a required field");
        usernameInput().clear();
        cy.contains("Username is a required field");
        passwordInput().clear();
        cy.contains("Password is a required field");
        submitButton().should("be.disabled");
    });
})