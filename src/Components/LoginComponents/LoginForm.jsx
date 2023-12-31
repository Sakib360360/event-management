"use client";

import GoogleLogin from "@/Components/GoogleLogin";
import useAuth from "@/hooks/useAuth";
/* import createJWT from "@/utils/createJWT"; */
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { startTransition, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import "./LoginForm.css";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signIn } = useAuth();
  const search = useSearchParams();
  const from = search.get("redirectUrl") || "/";
  const { replace, refresh } = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = async (data) => {
    const { email, password } = data;
    const toastId = toast.loading("Loading...");
    try {
      await signIn(email, password);
      /* await createJWT({ email }); */
      startTransition(() => {
        refresh();
        replace(from);
        toast.dismiss(toastId);
        toast.success("User signed in successfully");
      });
    } catch (error) {
      toast.dismiss(toastId);
      toast.error(error.message || "User not signed in");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
      <div className="form-control">
        <label htmlFor="email" className="label label-text text-white">
          Email
        </label>
        <input
          type="email"
          placeholder="email"
          id="email"
          name="email"
          className="input text-white bg-transparent border-b border-white input-bordered"
          autoComplete="email"
          {...register("email", {
            required: true,
            pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/,
          })}
        />
        {errors.email && (
          <span className="text-red-500 text-base mt-1">
            Please enter a valid email address.
          </span>
        )}
      </div>
      {/* <div className="form-control">
        <label htmlFor="password" className="label text-white label-text">
          Password
        </label>
        <input
          type="password"
          placeholder="password"
          id="password"
          name="password"
          className="input text-white bg-transparent border-b border-white "
          autoComplete="new-password"
          {...register("password", { required: true, minLength: 6 })}
        />
        {errors.password && (
          <span className="text-red-500 text-base mt-1">
            Please enter a password.
          </span>
        )}
        <label className="label">
          <a href="#" className="label-text-alt text-white underline link link-hover">
            Forgot password?
          </a>
        </label>
      </div> */}
      <div className="form-control relative">
        <label htmlFor="password" className="label text-white label-text">
          Password
        </label>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="password"
          id="password"
          name="password"
          className="input text-white bg-transparent border-b border-white input-bordered w-full pr-12" // Adjusted width and added padding for the button
          autoComplete="new-password"
          {...register("password", { required: true, minLength: 6 })}
        />
        <button
          type="button"
          className="absolute right-2 bottom-4 text-white"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>

      <div className="form-control mt-6">
        <button className="btn bg-custom" type="submit">
          Login
        </button>
      </div>
      <p className="mt-3">
        Don&apos;t have an account?
        <Link className="text-orange-500 underline ml-1" href="/signup">
          Signup
        </Link>
      </p>
      <div className="divider mt-5">OR</div>
      <GoogleLogin from={from} />
    </form>
  );
};

export default LoginForm;
