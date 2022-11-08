const seccal = require("./task3")
const power = seccal.power;
const round = seccal.round;
const ciel = seccal.cieling; 


test("Testing power",()=>{
    expect(power(2,3)).toBe(8);
 }) ;

 test("Testing power",()=>{
    expect(power(3,2)).toBe(9);
 }) ;

 test("Testing round",()=>{
    expect(round(2.7)).toBe(3);
 });

 test("Testing round",()=>{
    expect(round(5.1)).toBe(5);
 });

 test("Testing cieling",()=>{
    expect(ciel(5.6)).toBe(6);
 });

 test("Testing round",()=>{
    expect(ciel(3.1)).toBe(4);
 });