// 1
let emptyArray = [];

// 2
let moreThanFiveArray = Array(6).fill('beeba');

// 3
let arrayLength = moreThanFiveArray.length;

// 4
let firstItem = moreThanFiveArray[0];
let middleItem = moreThanFiveArray[Math.floor((arrayLength - 2) / 2)];
let lastItem = moreThanFiveArray[arrayLength - 1];
console.log('middle item', middleItem);

// 5
let mixedDataTypes = ['sad', 12, {dsa: 'bkjb'}, new Date(), arrayLength];
console.log(mixedDataTypes.length)

// 6
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// 7
console.log(itCompanies);

// 8
console.log(itCompanies.length);

// 9
console.log(itCompanies[0]);
console.log(itCompanies[Math.floor((arrayLength - 2) / 2)]);
console.log(itCompanies[arrayLength - 1]);

// 10
itCompanies.forEach(company => console.log(company))

// 11
itCompanies.map(company => company.toUpperCase());
itCompanies.forEach(company => console.log(company))

// 12
let amazon = itCompanies.pop();
console.log(itCompanies.join(', ') + ' and ' + amazon + 'are big IT companies');

// 13
console.log(itCompanies.indexOf('Amazon') !== -1 ? itCompanies[itCompanies.indexOf('Google')] : 'not found')

// 14
let itCompaniesCopy = [...itCompanies]

for(let i = 0; i < itCompaniesCopy.length; i++) {
    let count = 0;
    itCompaniesCopy[i].split('').forEach(letter => {
        if(letter === 'o') count += 1;
    })
    if(count >= 2) {
        itCompanies.splice(i, 1);
    }
}

console.log(itCompanies);

// 15
console.log(itCompanies.sort())

// 16
console.log(itCompanies.reverse())

// 17
console.log(itCompanies.slice(0, 4))

// 18
console.log(itCompanies.slice(itCompanies.length - 3, itCompanies.length))

// 19
console.log(itCompanies.slice(itCompanies.length / 2, (itCompanies.length / 2) + 1))

// 20
itCompanies.shift()

// 21
itCompanies.splice(itCompanies.length / 2, 1)

// 22
itCompanies.unshift()

// 23
itCompanies = [];