import LoginFormType from "./LoginFrom";


export default function Register() {





    return (
        <>
            <div>
                <h2 className="text-3xl text-center mt-5 font-semibold">LOGIN an account</h2>
                <LoginFormType />
            </div>

        </>
    );
}


























// "use client";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { email, z as zod } from "zod";
// import { useState } from "react";
// import { signIn } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import { toast } from "react-hot-toast";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// const schema = zod.object({
//     email: zod.email().nonempty("Email is required"),
//     password: zod.string().nonempty("Password is required"),
// });

// export default function LoginPage() {
//     const router = useRouter();
//     const [isLoading, setIsLoading] = useState(false);
//     const [errorMsg, setErrorMsg] = useState<string | null>(null);

//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//     } = useForm({
//         // defaultValues: {
//         //     "email": "",
//         //     "password": ""
//         // },
//         resolver: zodResolver(schema),
//         mode: "onChange",
//     });

//     const handleLogin = async (values: { email: string; password: string }) => {
//         try {
//             setIsLoading(true);
//             setErrorMsg(null);

//             const res = await signIn("credentials", {
//                 email: values.email,
//                 password: values.password,
//                 redirect: false,
//             });

//             console.log("SIGN IN RESPONSE:", res);

//             if (res?.ok) {
//                 toast.success("Login successful ✅");
//                 router.push("/");
//                 return;
//             }

//             toast.error("Invalid email or password ❌");
//             setErrorMsg("Invalid email or password");
//         } catch (err) {
//             console.error("Login error:", err);
//             setErrorMsg("Something went wrong");
//             toast.error("Something went wrong");
//         } finally {
//             setIsLoading(false);
//         }
//     }
//     return (
//         <div className="flex items-center justify-center h-screen px-4 ">
//             <div className="w-full max-w-md bg-white shadow-lg mb-20 rounded-2xl p-8">
//                 <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
//                     Login Now
//                 </h1>

//                 <form onSubmit={handleSubmit(handleLogin)} className="space-y-5">
//                     {/* Email Field */}
//                     <div>
//                         <Input
//                             type="email"
//                             placeholder="Email"
//                             className="border p-3 rounded-lg outline-none w-full"
//                             {...register("email")}
//                         />
//                         {errors.email?.message && (
//                             <small className="text-red-600">{errors.email.message}</small>
//                         )}
//                     </div>

//                     {/* Password Field */}
//                     <div>
//                         <Input
//                             type="password"
//                             placeholder="Password"
//                             className="border p-3 rounded-lg outline-none w-full"
//                             {...register("password")}
//                         />
//                         {errors.password?.message && (
//                             <small className="text-red-600">{errors.password.message}</small>
//                         )}
//                     </div>

//                     {/* Error Message */}
//                     {errorMsg && (
//                         <p className="text-red-500 text-center font-medium">{errorMsg}</p>
//                     )}

//                     {/* Submit Button */}
//                     <Button
//                         disabled={isLoading}
//                         type="submit"
//                         className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition duration-200"
//                     >
//                         {isLoading ? "Loading..." : "Login"}
//                     </Button>
//                 </form>

//                 {/* Footer */}
//                 <p className="text-center text-sm mt-6 text-gray-600">
//                     Already have an account?{" "}
//                     <Link href="/register" className="text-red-500 font-semibold hover:underline">
//                         Register
//                     </Link>
//                 </p>
//             </div>
//         </div>
//     );
// }
