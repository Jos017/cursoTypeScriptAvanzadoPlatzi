export const createProduct = (
  id: string | number,
  isNew: boolean = true,
  stock: number = 10
) => {
  return {
    id,
    stock,
    isNew,
  };
};

// 0     === false
// ''    === false
// false === false

const p1 = createProduct(1, true, 12);
console.log(p1);

const p2 = createProduct(5);
console.log(p2);
