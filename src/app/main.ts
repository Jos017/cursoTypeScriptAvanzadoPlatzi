import { faker } from '@faker-js/faker';
import { Product } from './products/product.model';
import {
  addProduct,
  updateProduct,
  findProducts,
  // getProduct,
  // updateProduct,
  // deleteProduct,
  products,
} from './products/product.service';

for (let i = 0; i < 50; i++) {
  addProduct({
    // id: faker.datatype.uuid(),
    // createdAt: faker.date.recent(),
    // updatedAt: faker.date.recent(),
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    color: faker.color.human(),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    price: parseInt(faker.commerce.price(), 10),
    tags: faker.helpers.arrayElements(),
    stock: faker.datatype.number({ min: 10, max: 100 }),
    isNew: faker.datatype.boolean(),
    categoryId: faker.datatype.uuid(),
  });
}

const product = products[0];
updateProduct(product.id, {
  title: 'New title',
  stock: 80,
});

findProducts({
  stock: 10,
  color: 'red',
  createdAt: new Date(),
  isNew: true,
  tags: ['a', 'b', 'c'],
});

// console.log('---------Add Product--------');
// console.log(products[0].title);
// console.log(products[1].title);
// console.log(products[2].title);
// const ids: string[] = products.map((product) => product.id);

// console.log('---------Get Product--------');
// console.log(getProduct(ids[1]).title);

// console.log('---------Update Product--------');
// updateProduct(ids[0], { title: 'titulo actualizado' });
// console.log(products[0].title);
// console.log(products[1].title);
// console.log(products[2].title);

// console.log('---------Delete Product--------');
// deleteProduct(ids[1]);
// console.log(products[0].title);
// console.log(products[1].title);
// console.log(products[2].title);
