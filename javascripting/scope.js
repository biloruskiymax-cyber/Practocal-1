let a = 1;
let b = 2;
let c = 3;

(function firstFunction () {
  b = 5; 
  c = 6;

  (function secondFunction () {
    b = 8; 

    (function thirdFunction () {
      const aLocal = 7; 
      const cLocal = 9;

      (function fourthFunction () {
        const aLocal2 = 1;
        const cLocal2 = 8;
      })()
    })()
  })()
})()

console.log(`a: ${a}, b: ${b}, c: ${c}`);
