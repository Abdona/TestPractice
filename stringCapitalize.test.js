const stringcapitalize = require('./stringCapitalize');

describe ('Capitalize the first letter of a given string',() =>{
    test('test1',() =>{
        expect(stringcapitalize("abdulrahman")).toBe("Abdulrahman");
    })
    test('test2',() =>{
        expect(stringcapitalize("hello my name is abdulrahman")).toBe("Hello my name is abdulrahman");
    })
    test('test3',() =>{
        expect(stringcapitalize("alles gut zum opferfest")).toBe("Alles gut zum opferfest");
    })
});