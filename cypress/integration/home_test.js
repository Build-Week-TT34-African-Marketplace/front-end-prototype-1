describe("Home app", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
        cy.waitForReact();
    });

    const collapsedSellForm = () => cy.get(".collapsedBar");
    const expandedSellForm = () => cy.get(".expandedBar");
    const ownerInput = () => cy.get("input[name='owner']");
    const itemNameInput = () => cy.get("input[name='itemName']");
    const itemDescriptionInput = () => cy.get("input[name='itemDescription']");
    const itemPriceInput = () => cy.get("input[name='itemPrice']");
    const itemCurrencyInput = () => cy.get("input[name='itemCurrency']");
    const submitButton = () => cy.get("button[name='disabledButt']");
    // const selectCurrencyInput = () => cy.react("SelectCurrency");

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

    it("should make sure the sell component elements exist", () => {
        collapsedSellForm().click();
        ownerInput().should("exist");
        itemNameInput().should("exist");
        itemDescriptionInput().should("exist");
        itemPriceInput().should("exist");
        itemCurrencyInput().should("exist");
        submitButton().should("exist");
        // selectCurrencyInput().should("exist");
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
            .type("35")
            .should("have.value", "35");
        itemCurrencyInput()
            .should("have.value", "")
            .type("currency")
            .should("have.value", "currency");
    });

    // it("can select a currency abbreviation from the list", () => {
    //     collapsedSellForm().click();
    //     selectCurrencyInput().type("USD");
    //     selectCurrencyInput().should("have.value", "USD");
    // });

    it("can submit details for item to be sold", () => {
        collapsedSellForm().click();
        submitButton().should("be.disabled");
        ownerInput().should("have.value", "");
        itemNameInput().should("have.value", "");
        itemDescriptionInput().should("have.value", "");
        itemPriceInput().should("have.value", "");
        itemCurrencyInput().should("have.value", "");
        submitButton().should("be.disabled");
        ownerInput().type("owner");
        submitButton().should("be.disabled");
        itemNameInput().type("itemname");
        submitButton().should("be.disabled");
        itemDescriptionInput().type("description");
        submitButton().should("be.disabled");
        itemPriceInput().type("35");
        submitButton().should("be.disabled");
        itemCurrencyInput().type("USD");
        submitButton().should("be.not.disabled");
        ownerInput().clear();
        itemNameInput().clear();
        itemDescriptionInput().clear();
        itemPriceInput().clear();
        itemCurrencyInput().clear();
        submitButton().should("be.disabled");
    });

    it("can make a new item listing", () => {
        collapsedSellForm().click();
        cy.contains("Owner: Owner Name").should("not.exist");
        cy.contains("Item name: Item Name").should("not.exist");
        cy.contains("Item Description: Item Description").should("not.exist");
        cy.contains("Item Currency: USD").should("not.exist");
        cy.contains("Item Price: 35").should("not.exist");
        ownerInput().type("Owner Name");
        itemNameInput().type("Item Name");
        itemDescriptionInput().type("Item Description");
        itemPriceInput().type("35");
        itemCurrencyInput().type("USD");
        submitButton().click();
        cy.contains("Owner: Owner Name").should("exist");
        cy.contains("Item name: Item Name").should("exist");
        cy.contains("Item Description: Item Description").should("exist");
        cy.contains("Item Currency: USD").should("exist");
        cy.contains("Item Price: 35").should("exist");
    });
})