const numbers: ReadonlyArray<number> = [1, 2, 3, 4];
// numbers.push(9);       // error
// numbers.pop();         // error
// numbers.unshift();     // error
numbers.filter(() => {}); // ok
numbers.reduce(() => 0); // ok
numbers.map(() => 0); // ok
