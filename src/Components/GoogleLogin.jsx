"use client";
import useAuth from "@/hooks/useAuth";
/* import createJWT from "@/utils/createJWT"; */
import saveUser from "@/utils/saveUser";
import { useRouter } from "next/navigation";
import { startTransition } from "react";
import { toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import "./GoogleLogin.css";

const GoogleLogin = ({ from }) => {
  const { googleLogin } = useAuth();
  const { replace, refresh } = useRouter();

  const handleGoogleLogin = async () => {
    const toastId = toast.loading("Loading...");
    try {
      const result = await googleLogin();
      const loggedInUser = result.user;

      const createdUser = {
        name: loggedInUser.displayName,
        email: loggedInUser.email,
      };
      console.log(createdUser);
      const user = await saveUser(createdUser);

      // Now you can perform any other actions using the 'user' object
      // For example, you can redirect the user or update the UI.
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
    <button
      onClick={handleGoogleLogin}
      type="button"
      className="btn bg-custom w-full mt-5 mx-auto"
    >
      <FcGoogle className="text-3xl mr-3" /> Continue with google
    </button>
  );
};

export default GoogleLogin;
