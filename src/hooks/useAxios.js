import axios from "axios";
<<<<<<< HEAD
import { useSnackbar } from "../providers/SnackbarProvider";
import { useUser } from "../users/providers/UserProvider";
import { useEffect } from "react";

const useAxios = () => {
  const snack = useSnackbar();
=======
import { useEffect } from "react";
import { useSnack } from "../providers/SnackbarProvider";
import { useUser } from "./../users/providers/UserProvider";
export default function useAxios() {
  const snack = useSnack();
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
  const { token } = useUser();

  useEffect(() => {
    axios.defaults.headers.common["x-auth-token"] = token;
<<<<<<< HEAD
    if (snack) {
      axios.interceptors.request.use((data) => {
        return Promise.resolve(data);
      }, null);

      axios.interceptors.response.use(null, (error) => {
        const expectedError = error.response && error.response.status >= 400;
        if (expectedError) {
          snack("error", error.message);
        }
        return Promise.reject(error);
      });
    }
  }, [snack, token]);
};

export default useAxios;
=======
    console.log("out");
    const requestInterceptor = axios.interceptors.request.use((data) => {
      console.log("in");
      return Promise.resolve(data);
    }, null);

    const responseInterceptor = axios.interceptors.response.use(
      null,
      (error) => {
        if (error.message) snack("error", error.message);
        return Promise.reject(error);
      }
    );

    return () => {
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, [snack, token]);
}
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
