const TOKEN_KEY = "movieapp_token";
const USER_KEY = "movieapp_token";

export const saveToken = (token: string) =>
  localStorage.setItem(TOKEN_KEY, token);
export const loadToken = (): string | null => localStorage.getItem(TOKEN_KEY);
export const removeToken = () => localStorage.removeItem("TOKEN_KEY");

export const saveUser = (user: any) =>
  localStorage.setItem(USER_KEY, JSON.stringify(user));
export const loadUser = (): any | null => {
  const s = localStorage.getItem(USER_KEY);
  return s ? JSON.parse(s) : null;
};
export const removeUser = () => localStorage.removeItem(USER_KEY);
