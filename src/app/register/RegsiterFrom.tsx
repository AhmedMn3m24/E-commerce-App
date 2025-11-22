"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterFromType } from "./RegisterTypes";
import fromsehema from "./fromsehema";
import handleRegister from "./Regsiteraction";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterForm() {
  const router = useRouter();

  const signup = useForm({
    resolver: zodResolver(fromsehema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
  });
  const {
    control,
    handleSubmit: formSubmit,
    formState: { isSubmitting },
  } = signup;

  async function onSubmit(data: RegisterFromType) {
    // console.log('data', data);
    const isRegistered = await handleRegister(data);

    if (isRegistered === true) {
      toast.success("Registration successful!");
      router.push("/login");
    } else {
      toast.error(isRegistered, { duration: 4000 });
    }
  }

  return (
    <div className="w-1/2 mx-auto mt-8">
      <Form {...signup}>
        <form onSubmit={formSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>User Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your email"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your password"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="rePassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Confirm your password"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your phone number"
                    type="tel"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-4 bg-red-600 hover:bg-red-700 cursor-pointer"
          >
            {isSubmitting ? "Creating Account..." : "Create New Account"}
          </Button>
        </form>
        <div className="text-center mt-4">
          <p>
            Already have an account?{" "}
            <Link href="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </Form>
    </div>
  );
}
