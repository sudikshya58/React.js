import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegsiterForm } from ".";
import { Button } from "../Component/Button";
import toast from "react-hot-toast";
import { userRegister } from "../api/APIS";

export const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await userRegister(form);
      toast.success(res.data.msg);
      setForm({ username: "", email: "", password: "", confirmpassword: "" });
      navigate("/login");
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
        {RegsiterForm.map((item, i) => (
          <div key={i} className="flex flex-col w-full mb-6">
            <label htmlFor={item.name} className="mb-2 font-semibold">
              {item.Formname}
            </label>
            <input
              type={item.type}
              name={item.name}
              onChange={handleChange}
              required
              value={form[item.name]}
              className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ))}
        <Button
          disabled={loading}
          type="submit"
          name="Submit"
          loading={loading}
        />
      </form>
    </div>
  );
};
