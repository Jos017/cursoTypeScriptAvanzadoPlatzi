import { Product } from './product.model';

// type CreatePrductDto = Omit<Product, 'id' | 'createdAt' | 'updatedAt'>

export interface CreateProductDto
  extends Omit<Product, 'id' | 'createdAt' | 'updatedAt'> {
  categoryId: string;
}

type example = Pick<Product, 'color' | 'description'>;

export interface UpdateProductDto extends Partial<CreateProductDto> {}

type example2 = Required<CreateProductDto>;

export interface FindProductDto
  extends Readonly<Partial<Omit<Product, 'tags'>>> {
  readonly tags: ReadonlyArray<string>;
}
