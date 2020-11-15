describe("Home app", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    });

    const collapsedSellForm = () => cy.get(".collapsedBar");
    const expandedSellForm = () => cy.get(".expandedBar");
    const ownerInput = () => cy.get("input[name='owner']");
    const itemNameInput = () => cy.get("input[name='itemName']");
    const itemDescriptionInput = () => cy.get("input[name='itemDescription']");
    const itemPriceInput = () => cy.get("input[name='itemPrice']");
    const itemCurrencyInput = () => cy.get("input[name='itemCurrency']");
    const submitButton = () => cy.get("button[name='disabledButt']");

    it("makes sure that tests work", () => {
        expect(1 + 1).to.equal(2);
        expect(2 * 2).to.equal(4);
        expect(6 - 5).not.to.equal(6);
    });

    it("makes sure DOM elements are rendered", () => {
        cy.get("nav").should("have.class", "container").should("exist");
        collapsedSellForm().should("exist");
        cy.contains("Home");
        cy.contains("User Profile");
        cy.contains("Current Listings:");
    });

    it("can expand the sell component", () => {
        collapsedSellForm().click();
        expandedSellForm().should("exist");
        cy.contains("Add Details for Item to Be Sold");
    });

    it("can fill out the sell input fields", () => {
        collapsedSellForm().click();
        ownerInput()
            .should("have.value", "")
            .type("owner")
            .should("have.value", "owner");
        itemNameInput()
            .should("have.value", "")
            .type("itemname")
            .should("have.value", "itemname");
        itemDescriptionInput()
            .should("have.value", "")
            .type("description")
            .should("have.value", "description");
        itemPriceInput()
            .should("have.value", "")
            .type("price")
            .should("have.value", "price");
        itemCurrencyInput()
            .should("have.value", "")
            .type("currency")
            .should("have.value", "currency");
    });
})