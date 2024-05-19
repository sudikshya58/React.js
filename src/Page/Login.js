import React, { useState } from "react";
import { LoginForm } from ".";
import toast from "react-hot-toast";
import { Button } from "../Component/Button";
import { userLogin } from "../api/APIS";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserDetail } from "../Redux/slices/userSlice";

export const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const navigate=useNavigate();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await userLogin(form);
      const data=res.data;
      console.log(res.data.accessToken)
      console.log(data.UserData.email);
      toast.success(res.data.msg);
      localStorage.setItem("accessToken",res.data.accessToken);
      localStorage.setItem("email",data.UserData.email);
      dispatch(setUserDetail(data.UserData))
      setForm({ email: "", password: "" });
      navigate("/")
    } catch (err) {
      toast.error(err.msg);
    } finally {
      setLoading(false);
    }
  };
  console.log(form);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-full max-w-md p-8 bg-white shadow-md rounded-lg"
      >
        {LoginForm.map((item, i) => (
          <div key={i} className="flex flex-col w-full mb-6">
            <label className="mb-2 font-semibold">{item.Formname}</label>
            <input
              type={item.type}
              required
              name={item.name}
              value={form[item.name]}
              onChange={handleChange}
              className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ))}
        <Button disabled={loading} type="submit" name="Submit" loading={loading}/>
      </form>
    </div>
  );
};
