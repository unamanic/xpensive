const login = (username, password) => {
  return new Promise((resolve, reject) => {
    resolve({
      isLoggedIn: false
    });
  })
};

const logout = () => {
  return new Promise((resolve, reject) => {
    resolve({
      isLoggedIn: true
    });
  })
};

export default {
  login,
  logout
}