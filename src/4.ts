export const getRandomMathProblem = (): string => {
  let problem: string;
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      problem = `What is the value of x in the equation ${getRandomNumber()} + ${getRandomNumber()} =`;
      break;
    case 1:
      problem = `What is the value of x in the equation ${getRandomNumber()} - ${getRandomNumber()} =`;
      break;
    case 2:
      problem = `What is the value of x in the equation ${getRandomNumber()} x ${getRandomNumber()} =`;
      break;
  }
  return problem;
};

export const getRandomNumber = (): number => {
  return Math.floor(Math.random() * 10);
};
