function range(start, end, step = 1) {
  const getRange = (start, end) =>
    Array.from(
      { length: (end - start) / step + 1 },
      (_, i) => start + i * step
    );
  const toNum = (num) => Number(num) || 0;
  start = toNum(start);

  return end === undefined
    ? (end) => getRange(start, end)
    : getRange(start, toNum(end));
}

console.log(range(3, 3)); // [3]
console.log(range(3, 8)); // [3,4,5,6,7,8]
console.log(range(3, 0)); // []

var start3 = range(3);
var start4 = range(4);

console.log(start3(3)); // [3]
console.log(start3(8)); // [3,4,5,6,7,8]
console.log(start3(0)); // []
console.log(start4(6)); // [4,5,6]

// Simpson, Kyle. You Don't Know JS Yet: Get Started (p. 115). GetiPub & Leanpub. Kindle Edition.
