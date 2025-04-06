import loginBanner from "@/assets/images/loginBanner.jpeg";
import { AppleIcon, GoogleIcon } from "@/assets/Icons";
import LoginForm from "@/components/shared/LoginForm";

const Login = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="hidden lg:w-[45%] w-full bg-muted lg:block">
        <img
          src={loginBanner}
          alt="banner image"
          className="h-full w-full object-cover object-top"
        />
      </div>

      <div className="flex justify-center w-full flex-col gap-8 overflow-auto p-6 md:p-10 lg:p-20 lg:w-[55%]">
        <div className="space-y-2.5">
          <h1 className="text-5xl text-[#1D2635] font-semibold leading-[120%]">
            Sign In
          </h1>
          <p className="text-lg font-mediul leading-[150%] text-[#6A7283]">
            You can sign in using your company .com account to access our
            services.
          </p>
        </div>

        <LoginForm />

        <div className="flex items-center justify-center gap-4">
          <div className="h-[1px] w-full bg-[#DFE0E4]"></div>
          <p className="text-lg font-bold text-[#1D2635] leading-[150%]">Or</p>
          <div className="h-[1px] w-full bg-[#DFE0E4]"></div>
        </div>
        {/* <SocialAuth /> */}
        {/* <div className="text-center text-lg font-medium leading-[120%]">
          Already have an account?
          <Link to="/login" className="ml-1 text-accent">
            Log in here
          </Link>
        </div> */}

        <div className="space-y-5">
          <div className="flex gap-6">
            <button
              type="button"
              className="text-[#1D2635] font-bold inline-flex items-center gap-2 py-3 justify-center w-full border rounded-[12px] border-[#DFE0E4]"
            >
              <GoogleIcon /> Google
            </button>
            <button
              type="button"
              className="text-[#1D2635] font-bold inline-flex items-center gap-2 py-3 justify-center w-full border rounded-[12px] border-[#DFE0E4]"
            >
              <AppleIcon /> Apple
            </button>
          </div>

          {/* <div className="flex space-x-2">
            <Checkbox id="terms" className="mt-1" />
            <label
              htmlFor="terms"
              className="font-medium leading-[150%] peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#798090]"
            >
              By creating an account, you agree to our{" "}
              <span className="text-[#5AC6F4]"> Terms and Conditions.</span>
              View our <span className="text-[#5AC6F4]"> Privacy Policy.</span>
            </label>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
