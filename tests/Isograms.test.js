import {IsogramCheck} from "../src/Isograms";

describe("For Isogram", () => {
    test("IsogramCheck does not throw", () => {
        expect(() => IsogramCheck()).not.toThrow();
    });

    test("IsogramCheck returns true when provided an empty string", () => {
       expect(IsogramCheck("")).toBeTruthy();
    });

    describe("IsogramCheck returns true for single character string", () => {
       test.each([
           "a",
           "b",
           "c",
           "d",
           "e",
       ])(`IsogramChecker returns true for "%i"`, (singleCharacterString) => {
          expect(IsogramCheck(singleCharacterString)).toBeTruthy();
       });
    });

    test(`IsogramCheck returns false when provided with "aa" string`, () => {
        expect(IsogramCheck("aa")).toBeFalsy();
    })
});
