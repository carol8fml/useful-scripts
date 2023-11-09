export const compareArrays = (firstArray: string[], secondArray: string[]): [string[], string[]] => {
  const commonElements: string[] = [];
  const nonRepeatedElements: string[] = [];

  for (const value of firstArray) {
    if (secondArray.includes(value)) {
      commonElements.push(value);
    } else {
      nonRepeatedElements.push(value);
    }
  }

  for (const value of secondArray) {
    if (!firstArray.includes(value)) {
      nonRepeatedElements.push(value);
    }
  }

  return [commonElements, nonRepeatedElements];
};
