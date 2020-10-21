
// Spread operator, concatenate multiple arrays, array max
const ages1 = [11, 13, 15, 16];
const ages2 = [10, 19, 18, 17];
const ages3 = [26, 25, 27, 21];
// old system
const allAges1 = ages1.concat(ages2).concat(5).concat(ages3);
// ES-6 3 dots
const allAges2 = [...ages1, ...ages2, 5, ...ages3]
console.log(allAges2)

// find max value old system
const number1 = 350;
const number2 = 250;
const number3 = 450;
const maximum1 = Math.max(number1, number2, number3);
console.log(maximum1);

// ES-6 spread oparator
const numbers = [350, 250, 450, 550, 950, 850];
const maximum2 = Math.max(...numbers); 
console.log(maximum2);