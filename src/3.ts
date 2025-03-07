
const getRandomTsCode = () => {
    let lines = [];
    let line = '';
    let i = 0;

    while (i < 10) {
        const operator = Math.random() > 0.5 ? '+' : '-';
        const num1 = Math.floor(Math.random() * 10);
        const num2 = Math.floor(Math.random() * 10);
        const answer = num1 + (operator === '+' ? num2 : -num2);

        line += `${num1} ${operator} ${num2} = `;
        line += `${answer}`;
        lines.push(line);
        i++;
    }

    return lines;
};

console.log(getRandomTsCode());