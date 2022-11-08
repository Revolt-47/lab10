 const cal = require("./sum");
 const sum = cal.sum;
 const subtract = cal.subtract;
 const multiply = cal.multiply;
 const divide = cal.divide;



 test("Testing sum",()=>{
    expect(sum(1,2)).toBe(3);
 }) ;

 test("Testing sub",()=>{
    expect(subtract(5,2)).toBe(3);
 }) ;

 test("Testing mul",()=>{
    expect(multiply(5,2)).toBe(10);
 }) ;

 test("Testing div",()=>{
    expect(divide(6,2)).toBe(3);
 }) ;

 test("Testing div",()=>{
    expect(divide(6,0)).toBe(undefined);
 }) ;

 





 


