import { assert } from "chai";

describe("InlineHelp", () => {
	before(async () => {
		await browser.url(`test/pages/InlineHelp.html`);
	});

	it("should show custom trigger", async () => {
		const triggerExample = await browser.$("#customTriggerInlineHelp");
		const triggerSlot = await triggerExample.shadow$(".ui5-popover-trigger > slot");
		const triggerIcon = await triggerExample.shadow$(".ui5-popover-trigger > ui5-icon");
		assert.ok(await triggerSlot.isExisting(), "trigger is rendered");
		assert.notOk(await triggerIcon.isExisting(), "trigger icon is not rendered");
	});

	it("should show custom popover content", async () => {
		const customPopoverContentExample = await browser.$("#customPopoverContent");
		const triggerIcon = await customPopoverContentExample.shadow$(".ui5-popover-trigger > ui5-icon");
		triggerIcon.click();
		const popoverContentSlot = await customPopoverContentExample.shadow$("ui5-popover slot[name=content]");
		assert.ok(await popoverContentSlot.isExisting(), "popover content is rendered");
	});

	it("should show different icon", async () => {
		const differentIconExample = await browser.$("#differentIconInlineHelp");
		const triggerIcon = await differentIconExample.shadow$(".ui5-popover-trigger > ui5-icon");
		assert.ok(await triggerIcon.isExisting(), "trigger icon is rendered");
		assert.strictEqual(await triggerIcon.getProperty("name"), "accelerated", "trigger icon is correctly set");
	});

	it("should show different placement type", async () => {
		const differentPlacementTypeExample = await browser.$("#differentPlacementTypeInlineHelp");
		const popover = await differentPlacementTypeExample.shadow$("ui5-popover");
		assert.strictEqual(await popover.getProperty("placementType"), "Top", "popover placement type is correctly set");
	});
});
