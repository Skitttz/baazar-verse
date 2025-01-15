/* eslint-disable @typescript-eslint/no-explicit-any */
import Cookies from "js-cookie";
import { decoded, encoded } from "./base64";

export const verificationCookie = (nameCookie: string): boolean => {
  if (document.cookie.indexOf(nameCookie) < 0) {
    return false;
  }
  return true;
};
export const validateToken = async (encodedToken?: string): Promise<boolean> => {
  if (!encodedToken) return false;

  try {
    const decodedToken = JSON.parse(decoded(encodedToken));
    const expDate = decodedToken?.exp;
    return !isNaN(expDate) && expDate >= Math.floor(Date.now() / 1000);
  } catch {
    return false;
  }
};


export const createCookie = (
  cookie: any,
  nameCookie: string,
  expires?: Date | number
): void => {
  Cookies.set(nameCookie, encoded(cookie), {
    expires: expires ?? new Date("01/01/2049"),
    secure: true,
    sameSite: "None"
  });
};

export const getCookie = (nameCookie: string): string | false => {
  const cookie = Cookies.get(nameCookie);
  return cookie ? decoded(cookie) : cookie || false;
};

export const clearCookie = (nameCookie: string): void => {
  Cookies.remove(nameCookie);
};
