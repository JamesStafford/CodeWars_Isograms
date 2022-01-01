import {IsogramCheck} from "../src/Isograms";

describe("For Isogram", () => {
    test("IsogramCheck does not throw", () => {
        expect(() => IsogramCheck()).not.toThrow();
    });
});
