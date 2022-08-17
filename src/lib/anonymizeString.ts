const anonymizeString = (str: string) => {
  let newStr = "";
  for (const letter of str) {
    if (letter === " ") newStr += " ";
    else newStr += "x";
  }

  return newStr;
};

export default anonymizeString;
