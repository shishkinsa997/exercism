//
// This is only a SKELETON file for the 'Rectangles' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function count(rect) {
  rect = rect.map(row => [...row]);
  const corners = rect.reduce((acc, row, idx) => {
    for (let i = 0; i < row.length; i++) {
      if (row[i] === '+') acc.push([idx, i])
    }
    return acc
  }, []);
  let res = 0
  corners.forEach((tl, idx) => {
    for (let i = idx+1; i < corners.length; i++) {
      if (tl[0] === corners[i][0]) {
        let tr = corners[i]
        for (let j = i+1; j < corners.length; j++) {
          if (tl[1] === corners[j][1]) {
            let bl = corners[j]
            for (let k = j+1; k < corners.length; k++) {
              if (bl[0] === corners[k][0] && tr[1] === corners[k][1]) {
                let br = corners[k]
                res++
              }
            }
          }
        }
      }
    }
  });
  return res
}
