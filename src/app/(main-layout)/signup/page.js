import LoginSvg from "@/Components/LoginSvg";
import SignupForm from "@/Components/SignUpComponents/SignupForm";

export const metadata = {
  title: "Signup - Event Guru",
};

const SignupPage = () => {
  return (
    <div className="hero  max-w-6xl bg-cover bg-no-repeat shadow-2xl bg-[url('https://imageservice.sky.com/pcms/d77bf0c2-bbf8-11e8-b772-67d2e06521b0/AGG_SOURCE?territory=GB&proposition=SBO_SPORT&language=eng')] mx-auto mt-20">
      <div className="hero-content flex-col lg:flex-row justify-between w-full">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-center">Register now!</h1>
          <p className="pt-6 text-center">Register now to connect with us.</p>
          <LoginSvg />
        </div>
        <div className="card flex-shrink-0 w-full max-w-lg ">
          <SignupForm />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;