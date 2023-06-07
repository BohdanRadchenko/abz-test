enum KEYS {
  TOKEN = "token",
}

export const getItem = (key: string) => JSON.parse(localStorage.getItem(key) || "");

export const setItem = (key: string, data: string) => localStorage.setItem(key, data);


const token = {
  get: () => getItem(KEYS.TOKEN),
  set: (data: string) => setItem(KEYS.TOKEN, data),
}

export default {
  getItem,
  setItem,
  token,
}
