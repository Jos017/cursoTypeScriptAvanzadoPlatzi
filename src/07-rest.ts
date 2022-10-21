import { User, Roles } from './01-enum';

const currentUser: User = {
  username: 'jose',
  role: Roles.CUSTOMER,
};

export const checkAdminRole = () => {
  if (currentUser.role === Roles.ADMIN) {
    return true;
  }
  return false;
};

const rta = checkAdminRole();
console.log(rta);

export const checkRole = (role1: string, role2: string) => {
  if (currentUser.role === role1) {
    return true;
  }
  if (currentUser.role === role2) {
    return true;
  }
  return false;
};

const rta2 = checkRole(Roles.ADMIN, Roles.SELLER);
console.log('checkRole', rta2);

export const checkRoleV2 = (roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
};

const rta3 = checkRoleV2([Roles.ADMIN, Roles.SELLER]);
console.log('checkRole', rta3);

export const checkRoleV3 = (...roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
};

const rta4 = checkRoleV3(Roles.ADMIN, Roles.SELLER, Roles.CUSTOMER);
console.log('checkRole', rta4);
