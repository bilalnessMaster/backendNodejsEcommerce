import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUserStore } from "../Stores/useUserStore";
import { Toaster } from "react-hot-toast";
import Loader from "../components/Loader";

const RegisterPage = () => {
  const { Register, loading } = useUserStore();
  const [dataForm, setDataForm] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  })
  const handlesubmit = (e) => {
    e.preventDefault()
    console.log(dataForm);
    console.log(loading);

    Register(dataForm)
  }
  return (
    <div className="w-full h-screen items-center bg-neutral-100/75  flex justify-center px-4 ">
      <Toaster position="bottom-right " />
      <form onSubmit={handlesubmit} className=" w-full md:w-1/2 lg:w-1/3 xl:w-1/5 flex flex-col gap-2 items-start px-2 py-2">
        <h1 className="text-xl w-full text-center mb-3 font-semibold ">Create account with ease </h1>
        <div className="flex w-full gap-2">
          <label
            htmlFor="firstName"
            className=" flex flex-col w-full text-sm gap-[0.1rem]"
          >
            <span className="font-medium">First Name</span>
            <div className="relative w-full">
              <input
                type="text"
                name="firstName"
                id=""
                value={dataForm.name}
                onChange={(e) => setDataForm({ ...dataForm, firstName: e.target.value })}
                className=" w-full h-9 pl-8 rounded border outline-none border-neutral-300"
                placeholder="Jhon"
              />
              <span className="absolute  left-1 inset-y-0 flex items-center  text-2xl">
                <i className="ri-id-card-line"></i>
              </span>
            </div>
          </label>
          {/* last name */}
          <label
            htmlFor="lastName"
            className=" flex flex-col w-full text-sm gap-[0.1rem]"
          >
            <span className="font-medium">Last Name</span>
            <div className="relative w-full">
              <input
                type="text"
                name="lastName"
                id=""
                value={dataForm.last}
                onChange={(e) => setDataForm({ ...dataForm, lastName: e.target.value })}
                className=" w-full h-9 pl-8 rounded border outline-none border-neutral-300"
                placeholder="Smith"
              />
              <span className="absolute  left-1 inset-y-0 flex items-center  text-2xl">
                <i className="ri-id-card-line "></i>
              </span>
            </div>
          </label>
        </div>
        <label
          htmlFor="email"
          className=" flex flex-col w-full text-sm gap-[0.1rem]"
        >
          <span className="font-medium">Email</span>
          <div className="relative w-full">
            <input
              type="email"
              name="email"
              id=""
              value={dataForm.email}
              onChange={(e) => setDataForm({ ...dataForm, email: e.target.value })}
              className=" w-full h-9 pl-8 rounded border outline-none border-neutral-300"
              placeholder="Example@gmail.com"
            />
            <span className="absolute  left-1 inset-y-0 flex items-center  text-2xl">
              <i className="ri-mail-line"></i>
            </span>
          </div>
        </label>
        <label
          htmlFor="password"
          className=" flex flex-col w-full text-sm gap-[0.1rem]"
        >
          <span className="font-medium">Password</span>
          <div className="relative w-full">
            <input
              type="password"
              name="password"
              id=""
              value={dataForm.password}
              onChange={(e) => setDataForm({ ...dataForm, password: e.target.value })}
              className=" w-full h-9 pl-8 rounded border outline-none border-neutral-300"
              placeholder="Example@gmail.com"
            />
            <span className="absolute  left-1 inset-y-0 flex items-center  text-2xl ">
              <i className="ri-lock-line"></i>
            </span>
          </div>
        </label>


        <button type="submit" className="text-center w-full flex items-center  justify-center  bg-neutral-700 h-9 capitalize mt-2 text-white font-semibold cursor-pointer rounded">
        {loading ? <Loader /> : 'Register'}
        </button>


        <p className="text-sm">you already have an account? <span><Link to="/login" className="text-green-500 border-b-2 border-black/5">login to your account </Link></span></p>
      </form>
    </div>
  );
};

export default RegisterPage;
