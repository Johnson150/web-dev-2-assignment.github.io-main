// Functions for converting units

// Function to convert kilometers to miles
const kmToMi = (kilometers) => kilometers * 0.621371;

// Function to convert miles to kilometers
const miToKm = (miles) => miles / 0.621371;

// Function to convert pounds to kilograms
const lbsToKg = (pounds) => pounds * 0.453592;

// Function to convert kilograms to pounds
const kgToLbs = (kilograms) => kilograms / 0.453592;

// Function to convert Celsius to Fahrenheit
const celsiusToFahrenheit = (celsius) => (celsius * 9 / 5) + 32;

// Function to convert Fahrenheit to Celsius
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) / 1.8;

// Function to perform unit conversion based on starting and ending units
const unitConverter = (startingUnit, endingUnit, value) => {
    let convertedResult;

    // Switch statement to determine the conversion method based on units
    switch (`${startingUnit}-${endingUnit}`) {
        case 'km-mi':
            convertedResult = kmToMi(value);
            break;
        case 'mi-km':
            convertedResult = miToKm(value);
            break;
        case 'lbs-kg':
            convertedResult = lbsToKg(value);
            break;
        case 'kg-lbs':
            convertedResult = kgToLbs(value);
            break;
        case 'fahrenheit-celsius':
            convertedResult = fahrenheitToCelsius(value);
            break;
        case 'celsius-fahrenheit':
            convertedResult = celsiusToFahrenheit(value);
            break;
        default:
            convertedResult = 'Invalid units';
    }

    return convertedResult;
};
// Function to convert weight based on user input
const convertWeight = () => {
     // Retrieving user input and direction of conversion
    const input = document.getElementById('Input').value;
    const lbsResult = unitConverter('kg', 'lbs', input);
    const kgResult = unitConverter('lbs', 'kg', input);
    const resultElement = document.getElementById('result');
    var weightDirection = document.querySelector('input[name="weightDir"]:checked').id;

    // Handling conversion and displaying result based on direction
    if (weightDirection == "KgToLbs") {
        if (typeof kgResult === 'number') {
            resultElement.textContent = `${input} pounds is equal to ${kgResult.toFixed(2)} kilograms.`;
        } else {
            resultElement.textContent = 'Invalid input or conversion.';
        }
    }
    else {
        if (typeof lbsResult === 'number') {
            resultElement.textContent = `${input} kilograms is equal to ${lbsResult.toFixed(2)} pounds.`;
        } else {
            resultElement.textContent = 'Invalid input or conversion.';
        }
    }
    // Clearing input field after conversion
    document.getElementById('Input').value = '';
};

// Function to convert temperature based on user input
const convertTemperature = () => {
    const input = document.getElementById('Input').value;
    const fahrenheitResult = unitConverter('celsius', 'fahrenheit', input);
    const celsiusResult = unitConverter('fahrenheit', 'celsius', input);
    const resultElement = document.getElementById('result');
    var temperatureDirection = document.querySelector('input[name="temperatureDir"]:checked').id;

     // Handling conversion and displaying result based on direction
    if (temperatureDirection == "celsiusToFahrenheit") {
        if (typeof fahrenheitResult === 'number') {
            resultElement.textContent = `${input} °C is equal to ${fahrenheitResult.toFixed(0)} °F.`;
        } else {
            resultElement.textContent = 'Invalid input or conversion.';
        }
    }
    else {
        if (typeof celsiusResult === 'number') {
            resultElement.textContent = `${input} °F is equal to ${celsiusResult.toFixed(0)} °C.`;
        } else {
            resultElement.textContent = 'Invalid input or conversion.';
        }
    }
     
    // Clearing input field after conversion
    document.getElementById('Input').value = '';
};
// Function to convert distance based on user input
const convertDistance = () => {
    const input = document.getElementById('Input').value;
    const kmResult = unitConverter('mi', 'km', input);
    const miResult = unitConverter('km', 'mi', input);
    const resultElement = document.getElementById('result');
    var distanceDirection = document.querySelector('input[name="distanceDir"]:checked').id;

     // Handling conversion and displaying result based on direction
    if (distanceDirection == "miToKm") {
        if (typeof kmResult === 'number') {
            resultElement.textContent = `${input} miles is equal to ${kmResult.toFixed(2)} km.`;
        } else {
            resultElement.textContent = 'Invalid input or conversion.';
        }
    }
    else {
        if (typeof miResult === 'number') {
            resultElement.textContent = `${input} km is equal to ${miResult.toFixed(2)} miles.`;
        } else {
            resultElement.textContent = 'Invalid input or conversion.';
        }
    }

    // Clearing input field after conversion
    document.getElementById('Input').value = '';

};

// Function to convert multiple weights based on user input
const convertManyWeight = () => {
    const manyInput = document.getElementById('manyInput').value;
    const resultElement = document.getElementById('manyResult');
    var weightDirection = document.querySelector('input[name="weightDir"]:checked').id;

    // Array to store conversion results
    const resultsArray = [];
    const weightsArray = manyInput.split(',').map(Number);

    // Loop through each weight input, perform conversion, and store result
    weightsArray.forEach(input => {
        const lbsResult = unitConverter('kg', 'lbs', input);
        const kgResult = unitConverter('lbs', 'kg', input);

        if (weightDirection === "KgToLbs") {
            if (typeof kgResult === 'number') {
                resultsArray.push(`${kgResult.toFixed(2)}kg,`);
            } else {
                resultsArray.push('Invalid input or conversion.');
            }
        } else {
            if (typeof lbsResult === 'number') {
                resultsArray.push(`${lbsResult.toFixed(2)}lbs,`);
            } else {
                resultsArray.push('Invalid input or conversion.');
            }
        }
    });
    
    // Displaying conversion results
    resultElement.textContent = resultsArray.join('\n');
    // Clearing input field after conversion
    document.getElementById('manyInput').value = '';

}


// Function to convert multiple temperatures based on user input
const convertManyTemperature = () => {
    // Retrieving user input and direction of conversion
    const manyInput = document.getElementById('manyInput').value;
    const resultElement = document.getElementById('manyResult');
    var temperatureDirection = document.querySelector('input[name="temperatureDir"]:checked').id;

     // Array to store conversion results
    const resultsArray = [];
    const temperaturesArray = manyInput.split(',').map(Number);

     // Loop through each temperature input, perform conversion, and store result
    temperaturesArray.forEach(input => {
        // Convert temperature based on direction
        const fahrenheitResult = unitConverter('celsius', 'fahrenheit', input);
        const celsiusResult = unitConverter('fahrenheit', 'celsius', input);

        // Check the conversion direction and handle accordingly
        if (temperatureDirection === "celsiusToFahrenheit") {
            if (typeof fahrenheitResult === 'number') {
                resultsArray.push(`${fahrenheitResult.toFixed(0)}°F,`);
            } else {
                resultsArray.push('Invalid input or conversion.');
            }
        } else {
            if (typeof celsiusResult === 'number') {
                resultsArray.push(`${celsiusResult.toFixed(0)}°C,`);
            } else {
                resultsArray.push('Invalid input or conversion.');
            }
        }
    });

    // Displaying conversion results
    resultElement.textContent = resultsArray.join('\n');
     // Clearing input field after conversion
    document.getElementById('manyInput').value = '';
}
// Function to convert multiple distances based on user input
const convertManyDistance = () => {
    const manyInput = document.getElementById('manyInput').value;
    const resultElement = document.getElementById('manyResult');
    var distanceDirection = document.querySelector('input[name="distanceDir"]:checked').id;
 
    // Array to store conversion results
    const resultsArray = [];
    const distancesArray = manyInput.split(',').map(Number);

    // Loop through each distance input, perform conversion, and store result
    distancesArray.forEach(input => {
        const kmResult = unitConverter('mi', 'km', input);
        const miResult = unitConverter('km', 'mi', input);

        // Check the conversion direction and handle accordingly
        if (distanceDirection === "miToKm") {
            if (typeof kmResult === 'number') {
                resultsArray.push(`${kmResult.toFixed(2)} km,`);
            } else {
                resultsArray.push('Invalid input or conversion.');
            }
        } else {
            if (typeof miResult === 'number') {
                resultsArray.push(`${miResult.toFixed(2)} miles,`);
            } else {
                resultsArray.push('Invalid input or conversion.');
            }
        }
    });

     // Displaying conversion results
    resultElement.textContent = resultsArray.join('\n');

     // Clearing input field after conversion
    document.getElementById('manyInput').value = '';
}




