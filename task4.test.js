const reverseString = require("./task4");


test("Testing reverse",()=>{
    expect(reverseString('joke')).toBe('ekoj');
 });

 test("Testing reverse",()=>{
    expect(reverseString('cake')).toBe('ekac');
 });