// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
 test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

describe (`fromEuroToDollar`, () =>{
test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(dollars).toBe(expected); 
})
});

describe (`fromDollarToYen`, () =>{
test("One dollar should be 146.26 yen", function() {
    
    const { fromDollarToYen } = require('./app.js');

    const yen = fromDollarToYen(1);

    const expected = 1 / 156.5;

    // Hago mi comparación (la prueba)
    expect(yen).toBe(expected); 
})
});

describe (`fromYenToPound`, () =>{
    test("One yen should be 179.88 pounds", function() {
        
        const { fromYenToPound } = require('./app.js');
    
        const pound = fromYenToPound(1);
    
        const expected = 1 / 0.87;
    
        // Hago mi comparación (la prueba)
        expect(pound).toBe(expected); 
    })
    });