"use client";

import GoogleLogin from "@/Components/GoogleLogin";
import useAuth from "@/hooks/useAuth";
/* import createJWT from "@/utils/createJWT"; */
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { startTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm();

  const { createUser, profileUpdate } = useAuth();
  const search = useSearchParams();
  const from = search.get("redirectUrl") || "/";
  const { replace, refresh } = useRouter();

  /*  const uploadImage = async (event) => {
    const formData = new FormData();
    if (!event.target.files[0]) return;
    formData.append("image", event.target.files[0]);
    const toastId = toast.loading("Image uploading...");
    try {
      const res = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
        {
          method: "POST",
          body: formData,
        }
      );
      if (!res.ok) throw new Error("Failed to upload image");

      const data = await res.json();
      toast.dismiss(toastId);
      toast.success("Image uploaded successfully!");
      setValue("photo", data.data.url);
    } catch (error) {
      toast.error("Image not uploaded!");
      toast.dismiss(toastId);
    }
  }; */

  const onSubmit = async (data, event) => {
    const { name, email, password, photoUrl } = data;
    const toastId = toast.loading("Loading...");
    try {
      await createUser(email, password);
      console.log(name, email, password, photoUrl);
      /*    await createJWT({ email }); */
      await profileUpdate(name, photoUrl);
      const createdUser = {
        name: name,
        email: email,

        /* role: "", */
      };
      console.log(createdUser);

      const user = await saveUser(createdUser);
      
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="card-body border rounded-lg"
    >
      <div className="form-control">
        <label htmlFor="name" className="label text-white label-text">
          Name
        </label>
        <input
          type="text"
          placeholder="name"
          id="name"
          name="name"
          className="input text-white bg-transparent border-b border-white input-bordered"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <span className="text-red-500 text-base mt-1">
            Please enter your name.
          </span>
        )}
      </div>
      <div className="form-control">
        <label htmlFor="email" className="label text-white label-text">
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
      <div className="form-control">
        <label htmlFor="password" className="label text-white label-text">
          Password
        </label>
        <input
          type="password"
          placeholder="password"
          id="password"
          name="password"
          className="input text-white bg-transparent border-b border-white input-bordered"
          autoComplete="new-password"
          {...register("password", { required: true, minLength: 6 })}
        />
        {errors.password && (
          <span className="text-red-500 text-base mt-1">
            Please enter a password.
          </span>
        )}
      </div>
      <div className="form-control">
        <label htmlFor="photoUrl" className="label text-white label-text">
          Photo
        </label>
        <input
          type="text"
          placeholder="photo URL"
          id="photoUrl"
          name="photoUrl"
          className="input text-white bg-transparent border-b border-white input-bordered"
          {...register("photoUrl", { required: true })}
        />
        {errors.photoUrl && (
          <span className="text-red-500 text-base mt-1">
            Please enter your photo URL.
          </span>
        )}
      </div>
      {/*      <div className="form-control">
        <label htmlFor="photo" className="label text-white label-text ">
          Photo
        </label>
        <input
          type="file"
          id="photo"
          onChange={uploadImage}
          className="file-input file-input-bordered text-white bg-transparent border-b border-white  w-full"
        />
      </div> */}
      <div className="form-control mt-6">
        <button className="btn bg-custom" type="submit">
          Sign Up
        </button>
      </div>
      <p className="mt-3">
        Already have an account?{" "}
        <Link className="text-orange-600 underline ml-1" href="/login">
          Login
        </Link>
      </p>
      <div className="divider mt-4">OR</div>
      <GoogleLogin from={from} />
    </form>
  );
};

export default SignupForm;
