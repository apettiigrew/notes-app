import bcrypt from "bcrypt";

export const util = {
  authenticate(plainText: string, hashPassword: string) {
    return bcrypt.compareSync(plainText, hashPassword);
  },
  encryptPassword(password: string) {
    return bcrypt.hashSync(password, 10);
  },
};
