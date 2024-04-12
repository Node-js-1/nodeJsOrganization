function capitalizeFirstLetter(string) {
    if (typeof string !== 'string' || string.length === 0) {
        return "Error: Please provide a non-empty string.";
    }

    return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(capitalizeFirstLetter('hello')); 
console.log(capitalizeFirstLetter('')); 
console.log(capitalizeFirstLetter(123)); 
console.log(capitalizeFirstLetter('123abc'));
console.log(capitalizeFirstLetter('hELlo')); 
console.log(capitalizeFirstLetter('@hello')); 