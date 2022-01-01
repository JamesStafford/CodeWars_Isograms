import {IsogramCheck} from "../src/Isograms";

describe("For Isogram", () => {
    test("IsogramCheck does not throw", () => {
        expect(() => IsogramCheck()).not.toThrow();
    });

    test("IsogramCheck returns true when provided an empty string", () => {
       expect(IsogramCheck("")).toBeTruthy();
    });

});
