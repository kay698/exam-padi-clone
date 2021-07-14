/**
 * Truncate
 * returns the truncated text with "..." or any specified ending character
 * @param {String} str
 * @param {Number} length
 * @param {String} ending
 * */
const truncate = (str = "", length = 20, ending = "...") =>
  str.length > length
    ? `${str.substring(0, length - ending.length)} ${ending}`
    : str;

/**
 * Capitalize
 * returns a capitalized sentence
 * @param {String} sentence
 * */
const capitalizeWords = (sentence) => {
  if (!sentence) throw Error("Invalid args received.");

  if (sentence.length === 1) return sentence.toUpperCase();

  return sentence
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

/**
 * percentage generator
 * returns percentage of any given value
 *  * @param {Number}
 * */
const generatePercentage = (expectedScore, actualScore) => {
  return (actualScore / expectedScore) * (100 / 1);
};

/**
 * Generate id
 * returns randomly generated id
 *
 * */
const generateID = (length) => {
  if (length < 8 || length > 20) {
    alert("length must be a whole number and between 8 and 20");
    return;
  }
  const generated = Array.from({ length }, () => {
    const characters = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
    ];

    return characters[Math.floor(Math.random() * characters.length)];
  });

  return generated.join("");
};

export { capitalizeWords, truncate, generateID, generatePercentage };
