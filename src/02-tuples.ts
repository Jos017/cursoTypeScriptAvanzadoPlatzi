const prices: (number | string)[] = [1, 2, 3, 4, 5, 'as'];
prices.push(1);
prices.push('1');

let user: [string, number, boolean];
// user = [];
// user = ['nico'];
// user = ['nico', 12]
user = ['nico', 12, true];
const [username, age] = user;
console.log(username);
console.log(age);
