function factorialCalculator(number) {
    if (Number.isInteger(number) && number >= 0) {
        let factorial = 1;
        let calculationProcess = `${number}! => `;
        
        for (let i = number; i >= 1; i--) {
            factorial *= i;
            calculationProcess += i;
            if (i !== 1) {
                calculationProcess += ' * ';
            }
        }
        console.log(`${calculationProcess} = ${factorial}`);
        return factorial;
    } else {
        console.log("Invalid input. Please provide a non-negative integer.");
        return null;
    }
}

console.log(`5! => ${factorialCalculator(5)}`);
console.log(`0! => ${factorialCalculator(0)}`);
console.log(`1! => ${factorialCalculator(1)}`);
console.log(`-3! => ${factorialCalculator(-3)}`);
console.log(`'abc'! => ${factorialCalculator('abc')}`);
