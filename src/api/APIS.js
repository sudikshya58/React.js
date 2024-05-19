import axiosInstance from "./axios.config";
export const getUser=()=>axiosInstance.get("/api/user");
export const userDetail=()=>axiosInstance.get("/api/auth/profile");
 

export const userLogin=(form)=>axiosInstance.post("/api/auth/login",form);
export const userRegister=(form)=>axiosInstance.post("/api/auth/register",form);

export const userUpdate=(form)=>axiosInstance.put("/api/auth/update",form);


export const userDelete = (form) => axiosInstance.delete("/api/auth/profile/delete", { data: form });
