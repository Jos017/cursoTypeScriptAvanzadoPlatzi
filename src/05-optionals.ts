export const createProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number
) => {
  return {
    id,
    stock: stock || 10,
    isNew: isNew || true,
  };
};

// 0     === false
// ''    === false
// false === false

const p1 = createProduct(1, true, 12);
console.log(p1);

const p2 = createProduct(5);
console.log(p2);
