import { jwtDecode } from "jwt-decode";

type TokenPayload = {
  userId: string;
  location: string;
  exp: number;
  iat: number;
};

export const decodeToken = (token: string): TokenPayload => {
  return jwtDecode<TokenPayload>(token);
};
