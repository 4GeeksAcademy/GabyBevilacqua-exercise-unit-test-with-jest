// This is my function that sums two numbers
 const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum }; 

const dollars = 1.07;
function fromEuroToDollar(valueEuro) {
    let valueDollar = valueEuro * dollars;
	return valueDollar;
}

const yen = 156.5;
function fromDollarToYen(valueDollar) {
    let valueYen = valueDollar / yen;
	return valueYen;
}

const pound = 0.87;
function fromYenToPound(valueYen) {
    let valuePound = valueYen / pound;
	return valuePound;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };