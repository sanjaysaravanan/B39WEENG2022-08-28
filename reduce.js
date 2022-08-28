const arr = [1, 2, 3, 4, 5, 6];

const arr_sum = arr.reduce((accuVal, currVal) => {
  return accuVal + currVal;
});
console.log(arr_sum);

const marks = [
  { sub: 'English', mark: 89 },
  { sub: 'Maths', mark: 99 },
  { sub: 'Social', mark: 98 },
  { sub: 'Science', mark: 97 },
  { sub: 'Language', mark: 100 },
]

const totalMarks = marks.reduce((accuVal, currVal, i) => {
  accuVal[currVal.sub] = currVal.mark;
  accuVal['total'] += currVal.mark;
  return accuVal;
}, { total: 0 });

console.log(totalMarks);













