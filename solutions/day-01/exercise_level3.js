const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort();
console.log(ages);
console.log('youngest:', ages[0])
console.log('oldest:', ages[ages.length - 1]);
console.log('median:', ages[(ages.length) / 2])

const sumOfAges = ages.reduce((acc, el) => acc + el, 0);
console.log('average age:', sumOfAges / ages.length);