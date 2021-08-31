import { User } from "../../../application/store/user/interfaces/user.interface";

export interface IToken {
  exp: number;
  iat: number;
  user: User;
}
