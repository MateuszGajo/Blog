import axios from "axios";
export const login = user => {
  return axios
    .post("/auth/login", {
      email: user.email,
      password: user.password
    })
    .then(res => {
      if (res.data.error) return false;
      localStorage.setItem("usertoken", res.data);
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};
