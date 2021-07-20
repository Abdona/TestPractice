const reverseString = require('./reversestring');

test("Testing String Reversing",() =>{
    expect(reverseString("Hello")).toBe("olleH");
    expect(reverseString("Hi my name is Abdulrahman")).toBe("namharludbA si eman ym iH");
});