"use client";

import GoogleLogin from "@/Components/GoogleLogin";
import useAuth from "@/hooks/useAuth";
import saveUser from "@/utils/saveUser";
/* import createJWT from "@/utils/createJWT"; */
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { startTransition, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FaEye, FaEyeSlash } from 'react-icons/fa';


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
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };


  const onSubmit = async (data) => {
    const { name, email, password, photoUrl, role } = data;
    //console.log(data)

    // ********sadia********//
    const img = photoUrl[0];//extract image

    const formData = new FormData(); //create instance

    formData.append('file', img);//append the img
    formData.append('upload_preset', 'lunar-brigade')//bind upload preset
    console.log(formData);

    const uploadImg = await fetch(`https://api.cloudinary.com/v1_1/dmaabideu/image/upload`, {
      method: 'POST',
      body: formData,
    })
    const uploadedImgData = await uploadImg.json()
    //console.log(uploadedImgData)

    // **************//
    const photo = uploadedImgData.secure_url

    const toastId = toast.loading("Loading...");
    try {
      await createUser(email, password);
      console.log(name, email, password, photo);
      /*    await createJWT({ email }); */
      await profileUpdate(name, photo)
        .then(() => {
          toast.success('Signup successful')
        });


      const createdUser = {
        name: name,
        email: email,
        photoUrl: photo,
        role: role,
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
      {/* <div className="form-control">
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
      </div> */}
      <div className="form-control relative">
        <label htmlFor="password" className="label text-white label-text">
          Password
        </label>
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="password"
          id="password"
          name="password"
          className="input text-white bg-transparent border-b border-white input-bordered w-full pr-12" // Adjusted width and added padding for the button
          autoComplete="new-password"
          {...register('password', { required: true, minLength: 6 })}
        />
        <button
          type="button"
          className="absolute right-2 bottom-4 text-white"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>


      <div className="form-control">
        <label htmlFor="photo" className="label text-white label-text ">
          Photo
        </label>
        <input
          type="file"
          id="photoUrl"
          {...register("photoUrl")}
          // onChange={uploadImage}
          className="file-input file-input-bordered text-white bg-transparent border-b border-white  w-full"
        />
        {errors.photUrl && (
          <span className="text-red-500 text-base mt-1">
            Please select a profile photo.
          </span>
        )}
      </div>
      {/*  role button here */}
      <div className="form-control">
        <label htmlFor="role" className="label text-white label-text">
          Sign up as:
        </label>

        {/* Select Input */}
        <select
          id="role"
          name="role"
          className="select select-bordered w-full max-w-xs bg-transparent  border-b border-white "
          {...register("role", { required: true })}
        >
          <option value="" disabled>Select Role</option>
          <option className="text-black" value="attendee">Attendee</option>
          <option className="text-black" value="organizer">Organizer</option>
        </select>

        {errors.role && (
          <span className="text-red-500 text-base mt-1">
            Please select a role.
          </span>
        )}
      </div>
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
