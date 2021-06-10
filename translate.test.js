    const { translate } = require("./translate");
    
    describe("translate", function() {
        test('translate("apple") → "applyway"', function() {
            expect(translate('apple')).toBe('appleway');
        })
        test('translate("else") → "elseway"', function() {
            expect(translate('else')).toBe('elseway');
        })
    })