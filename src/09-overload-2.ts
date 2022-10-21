// 'Jose' => ['J', 'o', 's', 'e']
// ['J', 'o', 's', 'e'] => 'Jose'

export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;
export function parseStr(input: number): boolean;

export function parseStr(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else if (typeof input === 'string') {
    return input.split(''); // string[]
  } else if (typeof input === 'number') {
    return true; // boolean
  }
}

const rtaArray = parseStr('Jose');
console.log(rtaArray);
rtaArray.reverse();

const rtaString = parseStr(['J', 'o', 's', 'e']);
console.log(rtaString);
rtaString.toUpperCase();

const rtaBoolean = parseStr(12);
console.log(rtaBoolean);
