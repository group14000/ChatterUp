import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import api from "../../utils/api";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const formFields = [
  { id: "name", label: "Name", type: "text" },
  { id: "email", label: "Email", type: "text" },
  { id: "password", label: "Password", type: "password" },
];

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${api}api/auth/register`, formData);
      console.log("Registration successful:", response.data);
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center px-6 py-8">
      <div className="w-full max-w-md space-y-6 bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-6 sm:p-8">
        <div className="flex items-center justify-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-8 h-8 mr-2" src="/logo.svg" alt="logo" />
          ChatterUp
        </div>
        <h1 className="text-xl font-bold text-gray-900 md:text-2xl dark:text-white">
          Create an account
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          {formFields.map(({ id, label, type }) => (
            <div key={id} className="relative">
              <label
                htmlFor={id}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                {label}
              </label>
              <input
                type={id === "password" && showPassword ? "text" : type}
                name={id}
                id={id}
                value={formData[id]}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {id === "password" && (
                <span
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center justify-center cursor-pointer mt-6"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              )}
            </div>
          ))}
          <button
            type="submit"
            className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Create an account
          </button>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Register;
