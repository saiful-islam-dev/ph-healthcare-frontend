export const setToLocalStorage = (key: string, token: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }

  return localStorage.setItem(key, token);
};

export const getFromLocalStorage = (key: string) => {
  if (typeof window !== "undefined") {
    console.log(key);
    const token = localStorage.getItem(key);
    console.log(token);
    return token;
  }
  return null; // Or handle the case where localStorage is not available
};

export const removeFromLocalStorage = (key: string) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key);
  }
};
