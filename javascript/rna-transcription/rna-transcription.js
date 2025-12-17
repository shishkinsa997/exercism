//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const transEl = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
};

export const toRna = (dna) => {
  let transDna = ''
  for (let el of dna) {
    transDna = transDna + transEl[el]
  }
  return transDna
};
