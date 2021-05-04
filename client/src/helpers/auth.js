import cookie, { set } from "js-cookie";

// Set in Cookie
export const setCookie = (key, value) => {
  if (window !== "undefined") {
    cookie.set(key, value, {
      // 1 day
      expires: 1,
    });
  }
};

// Remove from Cookie
export const removeCookie = (key) => {
  if (window !== "undefined") {
    cookie.remove(key, {
      expires: 1,
    });
  }
};

// Get from Cookie like Token
export const getCookie = (key) => {
  if (window !== "undefined") {
    cookie.get(key);
  }
};

// Set in local Storage
export const setLocalStorage = (key, value) => {
  if (window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

// Remove from local storage
export const removeaLocalStorage = (key) => {
  if (window !== "undefined") {
    localStorage.removeItem(key);
  }
};

// Auth user after login
export const authenticate = (response, next) => {
  setCookie("token", response.data.token);
  setLocalStorage("user", response.data.user);
  next();
};

// signout
export const signout = (next) => {
  removeCookie("token");
  removeaLocalStorage("user");
};

// get user info from ocal storage
export const isAuth = () => {
  if (window !== "undefined") {
    const cookieChecked = getCookie("token");
    if (cookieChecked) {
      if (localStorage.getItem("user")) {
        return JSON.parse(localStorage.getItem("user"));
      } else {
        return false;
      }
    }
  }
};

// update user data in local storage
export const updateUser = (response, next) => {
  if (window !== "undefined") {
    let auth = JSON.parse(localStorage.getItem("user"));
    auth = response.data;
    localStorage.setItem("user", JSON.stringify(auth));
  }
  next();
};
