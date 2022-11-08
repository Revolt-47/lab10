
const find = require("./task5")

test("Find value",()=>{
    expect(find(13)).toBe(true);
 });

 test("Find value",()=>{
    expect(find(53)).toBe(false);
 });