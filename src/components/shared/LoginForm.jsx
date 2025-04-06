import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import AuthInput from "./AuthInput";
import PasswordField from "./PasswordField";
import { Button } from "../ui/button";
import { FormLabel } from "../ui/form";
import { MailIcon, PersonIcon } from "@/assets/Icons";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const form = useForm({
    // resolver: zodResolver(registerSchema),
    defaultValues: {
      userName: "",
      password: "",
    },
  });

  const handleSubmit = async (e) => {
    console.log("Form data:", e);

    // const userData = {
    //   name: e.name,
    //   email: e.email,
    //   password: e.password,
    //   password_confirmation: e.confirmPassword,
    //   role: "user",
    //   address: e.address,
    //   phone: e.phoneNumber,
    //   language: e.language,
    // };

    // setIsLoading(true);

    // try {
    //   // const response = await axios.post(
    //   //   `https://goldlync.softvencefsd.xyz/api/register`,
    //   //   userData,
    //   //   {
    //   //     headers: {
    //   //       "Content-Type": "application/json",
    //   //     },
    //   //   }
    //   // );

    //   const token = response?.data?.access_token;

    //   console.log("Registration response:", response.data);

    //   if (token) {
    //     localStorage.setItem("auth_token", token);
    //   }

    //   new Promise((resolve) => {
    //     navigate(-2);
    //     resolve();
    //   }).then(() => {
    //     toast.success("Registration successful!");
    //   });
    // } catch (error) {
    //   console.error("Registration error:", error);
    //   const errorMessage =
    //     error.response?.data?.message ||
    //     "Registration failed! Please try again.";
    //   toast.error(errorMessage);
    // } finally {
    //   setIsLoading(false);
    // }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="userName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold text-[#043E5C] text-lg">
                User name
              </FormLabel>
              <FormControl>
                <AuthInput
                  type="text"
                  icon={<PersonIcon className="w-6" />}
                  containerClassName="[&_svg]:text-input"
                  placeholder="Name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold text-[#043E5C] text-lg">
                Password
              </FormLabel>
              <FormControl>
                <PasswordField placeholder="Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full rounded-[12px] font-bold text-xl py-3"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Registering...
            </>
          ) : (
            "Sign In"
          )}
        </Button>

        <div className="text-center font-semibold text-[#798090] leading-[150%]">
          Don’t have an account?
          <Link to="/register" className="ml-1 text-primary">
            Sign Up
          </Link>
        </div>
      </form>
    </Form>
  );
};

export default LoginForm;
