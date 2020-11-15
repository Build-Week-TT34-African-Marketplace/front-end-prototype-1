describe("Login app", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/login");
    });

    const usernameInput = () => cy.get("input[name='username']");
    const passwordInput = () => cy.get("input[name='password']");
    const submitButton = () => cy.get("button[name='disabledButtSignup']");
    const signUpButton = () => cy.get("#signUpBtn");

    it("makes sure that tests work", () => {
        expect(1 + 1).to.equal(2);
        expect(2 * 2).to.equal(4);
        expect(6 - 5).not.to.equal(6);
    });

    it("can make sure DOM elements exist", () => {
        usernameInput().should("exist");
        passwordInput().should("exist");
        submitButton().should("exist");
        signUpButton().should("exist");

        cy.contains("Login");
    });

    it("can type into the input fields", () => {
        usernameInput()
            .should("have.value", "")
            .type("randomusername")
            .should("have.value", "randomusername");
        passwordInput()
            .should("have.value", "")
            .type("badpassword")
            .should("have.value", "badpassword");
    });
    
    it("should disable submit button until both inputs are filled out", () => {
        submitButton().should("be.disabled");
        usernameInput().should("have.value", "");
        passwordInput().should("have.value", "");
        submitButton().should("be.disabled");
        usernameInput().type("randomusername");
        submitButton().should("be.disabled");
        passwordInput().type("badpassword");
        submitButton().should("be.not.disabled");
        usernameInput().clear();
        cy.contains("Username is a required field");
        passwordInput().clear();
        cy.contains("Password is a required field");
        submitButton().should("be.disabled");
    });
})