import {sum} from '../sum';


test("Sum function shsould calculate the sum of two numbers", () => {
    const result = sum(3,4);
    //assertion
    expect(result).toBe(7);
})