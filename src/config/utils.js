
function makeString(object) {
    /// Ensure some object is a coerced to a string
    if (object == null) return '';
    return '' + object;
};

function titleize(str) {
    return makeString(str).toLowerCase().replace(/(?:^|\s|-)\S/g, function (c) {
        return c.toUpperCase();
    });
};

function capitalize(str, lowercaseRest) {
    str = makeString(str);
    var remainingChars = !lowercaseRest ? str.slice(1) : str.slice(1).toLowerCase();

    return str.charAt(0).toUpperCase() + remainingChars;
};

export {
    makeString,
    titleize,
    capitalize
}