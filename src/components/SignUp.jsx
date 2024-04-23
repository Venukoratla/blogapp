import { useState } from "react";

import authService from "../appwrite/auth";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../store/authSlice";

import { Button, Input, Logo } from "../components/index";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();

  const create = async (data) => {
    console.log(data, "from signup");
    setError("");
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const userData = await authService.getCurrentUser(userData);
        if (userData) dispatch(login(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div
      className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
    >
      <div className="mb-2 flex justify-center">
        <span className="inline-block w-full max-w-[100px]">
          <Logo width="100%" />
        </span>
      </div>
      <h2>Sign in to your account</h2>
      <p className="mt-2 text-center text-base text-black/60">
        Don&apos;t have any account?&nbsp;
        <Link
          to="/signup"
          className="font-medium text-primary transition-all duration-200 hover:underline"
        >
          Sign Up
        </Link>
      </p>
      {error && <p className="text-red-500 text-center mt-8">{error}</p>}
      <form onSubmit={handleSubmit(create)}>
        <div className="space-y-5">
          <Input
            label="Name: "
            type="text"
            placeholder="Enter your full name"
            {...register("name", {
              required: true,
            })}
          />
          <Input
            label="Email: "
            type="email"
            placeholder="Enter Your Email"
            {...register("email", {
              required: true,
              validate: {
                matchPatern: (value) =>
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                  "Email address must be a valid address",
              },
            })}
          />

          <Input
            label="Password: "
            placeholder="Enter Your Password"
            type="password"
            {...register("password", {
              required: true,
            })}
          />
          <Button type="submit" className="w-full">
            Create Account
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
