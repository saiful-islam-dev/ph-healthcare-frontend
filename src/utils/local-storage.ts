export const setToLocalStorage = (key: string, token: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }

  return localStorage.setItem(key, token);
};

export const getFromLocalStorage = (key: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  const token = localStorage.getItem(key);
  return token;
};

export const removeFromLocalStorage = (key: string) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key);
  }
};

