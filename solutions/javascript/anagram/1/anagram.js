//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (word, list) => {
  const res = [];
  word = word.toLowerCase();
  list = list
    .map((w) => w.toLowerCase())
    .filter((w) => w.length === word.length);
  for (w of list) {
    if (word.split("").every((l) => w.split("").includes(l))) res.push(w);
  }
  return res;
};
