// 'Jose' => ['J', 'o', 's', 'e']
// ['J', 'o', 's', 'e'] => 'Jose'

function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else {
    return input.split(''); // string[]
  }
}

const rtaArray = parseStr('Jose');
console.log(rtaArray);

if (Array.isArray(rtaArray)) {
  rtaArray.reverse();
}

const rtaString = parseStr(['J', 'o', 's', 'e']);
console.log(rtaString);

if (typeof rtaString === 'string') {
  rtaString.toUpperCase();
}
