export enum Roles {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer',
}

export type User = {
  username: string;
  role: Roles;
};

const nicoUser: User = {
  username: 'nicobytes',
  role: Roles.SELLER,
};
