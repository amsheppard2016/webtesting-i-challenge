const enhancer = require("./enhancer.js");
// test away!
describe("items functions", () => {
    describe("test repair()", () => {
        let item = { name: "axe", durability: "15", enhancement: "1" };
        it("returns durability to 100", () => {
            result = enhancer.repair(item);
            expect = { name: "axe", durability: "100", enhancement: "1" };
        });
    });
    describe("test succeed()", () => {
        let item = { name: "axe", durability: "15", enhancement: "18" };
        it("returns enhancement 19", () => {
            result = enhancer.succeed(item);
            expect = { name: "axe", durability: "15", enhancement: "19" };
        });
        let item2 = { name: "axe", durability: "15", enhancement: "21" };
        it("returns enhancement 21", () => {
            result = enhancer.succeed(item);
            expect = { name: "axe", durability: "15", enhancement: "21" };
        });
    });
    describe("test fail()", () => {
        let item = { name: "axe", durability: "30", enhancement: "4" };
        it("returns durability to 25", () => {
            result = enhancer.fail(item);
            expect = { name: "axe", durability: "25", enhancement: "4" };
        });
        let item2 = { name: "axe", durability: "30", enhancement: "16" };
        it("returns durability to 20", () => {
            result = enhancer.fail(item2);
            expect = { name: "axe", durability: "20", enhancement: "16" };
        });
        let item3 = { name: "axe", durability: "40", enhancement: "17" };
        it("returns durability to 30 and enhancement to 16", () => {
            result = enhancer.fail(item3);
            expect = { name: "axe", durability: "30", enhancement: "16" };
        });
    });
});
