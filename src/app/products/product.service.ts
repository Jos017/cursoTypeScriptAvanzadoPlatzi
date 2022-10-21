import {
  Product,
  // , ProductChange
} from './product.model';
import {
  CreateProductDto,
  FindProductDto,
  UpdateProductDto,
} from './product.dto';
import { faker } from '@faker-js/faker';

export let products: Product[] = [];

export const addProduct = (data: CreateProductDto): Product => {
  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
  };
  products.push(newProduct);
  return newProduct;
};

export const updateProduct = (
  id: Product['id'],
  changes: UpdateProductDto
): Product => {
  const index = products.findIndex((item) => item.id === id);
  const prevData = products[index];
  products[index] = {
    ...prevData,
    ...changes,
  };
  return products[index];
};

export const findProducts = (dto: FindProductDto): Product[] => {
  // code
  return products;
};

// export const getProduct = (id: string): Product => {
//   const productArr: Product[] = products.filter((product) => {
//     return id === product.id;
//   });
//   return productArr[0];
// };

// export const updateProduct = (
//   id: string,
//   changes: ProductChange
// ): Product | string => {
//   let productModified: Product | string = 'No match to modify';
//   const productArr: Product[] = products.map((product) => {
//     if (product.id === id) {
//       productModified = { ...product, ...changes };
//       return productModified;
//     } else {
//       return product;
//     }
//   });
//   if (typeof productModified !== 'string') {
//     products = productArr;
//   }
//   return productModified;
// };

// export const deleteProduct = (id: string): Product | string => {
//   let deletedProduct: Product | string = 'No match to delete';
//   const productArr: Product[] = products.filter((product) => {
//     deletedProduct = product;
//     return product.id !== id;
//   });
//   products = productArr;
//   return deletedProduct;
// };
