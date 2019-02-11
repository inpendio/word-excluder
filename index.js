/* import wordList from './words';
import included from './words'; */
const wordList = require("./words");
const included = require("./words").included;

const vowelTest = /[aeiouy]/g;

const filterList = list => {
  if (
    !(list instanceof Map) &&
    list.constructor !== Array &&
    !Array.isArray(list)
  )
    return list;
  const out = [];
  list.forEach(item => {
    if (!wordList.has(item.toLowerCase()) && isRealWord(item)) {
      out.push(item.toLowerCase());
    }
  });
  return out;
};

const isRealWord = item => {
  if (item.length <= 2 && !included.has(item)) return false;
  if (item.length >= 3 && !vowelTest.test(item)) return false;
  return true;
};

module.exports = filterList;
