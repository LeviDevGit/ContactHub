import { fetchApi } from "@/services/api";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

export interface IDataLogin {
  email: string;
  password: string;
}

interface IToken {
  token: string;
}

export const onSubmitDataLogin = async (
  router: AppRouterInstance,
  data: IDataLogin
) => {
  console.log(data);

  try {
    const response: IToken = await fetchApi("login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.token) {
      localStorage.setItem("token", response.token);
      router.push("/");
    }
  } catch (error) {}
};

export const onSubmitDataDemo = async (router: AppRouterInstance) => {
  try {
    const response: IToken = await fetchApi("login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: "Demo@mail.com", password: "demo123" }),
    });

    if (response.token) {
      localStorage.setItem("token", response.token);
      router.push("/");
    } else {
      const registration = await fetchApi("clients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: "Demo",
          email: "Demo@mail.com",
          password: "demo123",
          telephone: "123456",
        }),
      });

      const login: IToken = await fetchApi("login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: "Demo@mail.com", password: "demo123" }),
      });

      localStorage.setItem("token", login.token);
      router.push("/");
    }
  } catch (error) {}
};
