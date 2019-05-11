/**
 * return id from object as string
 * @param {{ id: string }} param
 */
const keyExtractor = ({ id }) => `${id}`;

/**
 * Convert array of objects to object by given key
 * @param {array} arr
 * @param {string} key
 * @returns {object}
 */
const arrayToObjectByKey = (arr = [], key) => arr.reduce((acc, curr) => Object.assign(
  acc,
  {
    [curr[key]]: curr,
  },
), {});

/**
 * merge two array without duplicates
 * @param {array} arr1
 * @param {array} arr2
 * @returns {array}
 */
const mergeUniques = (arr1 = [], arr2 = []) => [...new Set([...arr1, ...arr2])];

/**
 * parse text - convert spaces to '+'
 * @param {string} text
 * @returns {string}
 */
const parseSearchText = (text = '') => text.split(' ').join('+');

export {
  keyExtractor,
  arrayToObjectByKey,
  mergeUniques,
  parseSearchText,
};
