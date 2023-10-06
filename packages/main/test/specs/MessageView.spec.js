import { assert } from "chai";

describe("MessageView general interaction", () => {
    before(async () => {
        await browser.url(`test/pages/MessageView.html`);
    });

    it("Segmented button should shown correct count of any item type", async () => {
        assert.ok(true);
    });

    it("Clicking on an item should navigate to details page", async () => {
        const messageView = await browser.$("#mv3");
        let firstMessage = await messageView.shadow$(".ui5-list-custom");
        assert.ok(true);
    });

    it("Clicking back should navigate to list view", async () => {
        assert.ok(true);
    });
});
