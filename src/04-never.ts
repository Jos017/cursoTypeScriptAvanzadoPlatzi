const withoutEnd = () => {
  while (true) {
    console.log(`nunca para de aprender`);
  }
};

const fail = (message: string) => {
  throw new Error(message);
};

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'Es un string';
  } else if (Array.isArray(input)) {
    return 'Es un array';
  } else {
    return fail('Not Match');
  }
};
