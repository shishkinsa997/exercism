//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (word, list) => {
  const res = [];
  const copyWord = word.toLowerCase();
  const copyList = list
    .filter((w) => w.length === copyWord.length);
  for (const w of copyList) {
    if (copyWord.split("").every((l) => w.toLowerCase().split("").includes(l))) res.push(w);
  }
  return res;
};
