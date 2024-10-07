import { userActions } from "./user-slice";

export const fetchRegisteredUser = (email, password, confirmPassword) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("https://localhost:7010/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, confirmPassword }),
      });

      if (!response.ok) {
        return { message: "Registration failed" };
      }

      const resData = await response.json();
      return resData;
    };

    try {
      const response = await fetchData();

      const token = response.token;
      localStorage.setItem("authUser", token);

      dispatch(userActions.registerUser(response));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchLogIn = (email, password) => {
  return async (despatch) => {
    const fetchData = async () => {
      const response = await fetch("https://localhost:7010/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error("Invalid email or password!");
        } else {
          throw new Error("Something went wrong!");
        }
      }

      const resData = await response.json();
      return resData;
    };

    try {
      const response = await fetchData();

      const token = response.token;
      localStorage.setItem("authUser", token);
      despatch(userActions.setLoggedIn(response));
    } catch (error) {
      return error.message;
    }
  };
};
