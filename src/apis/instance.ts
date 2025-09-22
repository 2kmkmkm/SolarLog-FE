import axios from "axios";

export const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

instance.interceptors.response.use(
  (res) => res,
  async (error) => {
    const status = error.response?.status;
    const originalRequest = error.config;
    const isLoginRequest = originalRequest?.url?.includes("/login");

    if (status === 401 && !isLoginRequest) {
      const { store } = await import("../app/store");
      const { clearToken } = await import("@features/authSlice");

      alert("세션이 만료되었습니다. 다시 로그인해주세요.");

      store.dispatch(clearToken());
      localStorage.removeItem("token");
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);
