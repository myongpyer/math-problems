const getRandomNumber = (): number => Math.floor(Math.random() * 10) + 1;

export const mathProblems = {
    add: (a: number, b: number): number => a + b,
    subtract: (a: number, b: number): number => a - b,
    multiply: (a: number, b: number): number => a * b,
    divide: (a: number, b: number): number => a / b,
    remainder: (a: number, b: number): number => a % b,
};

export const getRandomMathProblem = (): string => {
    const operator = Math.random() < 0.5 ? "add" : "subtract";
    const numbers = [getRandomNumber(), getRandomNumber()];

    return `${numbers[0]} ${operator} ${numbers[1]}`;
};
