import RegisterForm from "./RegsiterFrom";

export default function Register() {
  return (
    <>
      <div>
        <h2 className="text-3xl text-center mt-5 font-semibold">
          Create an account
        </h2>
        <RegisterForm />
      </div>
    </>
  );
}

/* // "use client"
// import React, { useState } from "react";
// // import login from "@/assets/images/login.jpg";
// import { Input } from "@/components/ui/input";
// import { useForm } from "react-hook-form";
// import * as zod from 'zod'
// import { zodResolver } from "@hookform/resolvers/zod";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { useRouter } from "next/navigation";
// import { toast } from "react-hot-toast";
// export default function Register() {
//   const [errorMsg, setErrorMsg] = useState<null | string>(null)
//   const [isLoading, setIsLoading] = useState(false)
//   const router = useRouter()

//   const schema = zod.object({
//     name: zod.string().nonempty('Name is Required'),
//     email: zod.email().nonempty('email is Required'),
//     password: zod.string().nonempty('password is Required'),
//     rePassword: zod.string().nonempty('Confirm Password is Required'),
//     phone: zod.string().nonempty('phone is Required')
//   }).refine(function (values) {

//     return values.password === values.rePassword

//   }

//     , {

//       error: "pass is notValid",
//       path: ['rePassword']
//     })

//   interface IRegisterBody {
//     name: string,
//     email: string,
//     password: string
//     rePassword: string
//     phone: string
//   }


//   const { register, handleSubmit, formState: { errors } } = useForm({
//     defaultValues: {
//       "name": "",
//       "email": "",
//       "password": "",
//       "rePassword": "",
//       "phone": ""
//     },
//     resolver: zodResolver(schema),
//     mode: 'all'
//   });
//   async function handleRegister(values: IRegisterBody) {
//     setIsLoading(true);
//     setErrorMsg("")
//     const data = await fetch('https://ecommerce.routemisr.com/api/v1/auth/signup', {
//       method: "POST",
//       body: JSON.stringify(values),
//       headers: {
//         "Content-Type": "application/json",
//       }
//     }
//     )
//     const res = await data.json();

//     if (res.message === "success") {
//       toast.success("Account created successfully ✅");
//       router.push("/login");
//     } else {
//       setErrorMsg(res?.message || "Something went wrong");
//     }

//     setIsLoading(false);
//   }

//   return (
//     <div className="flex min-h-10 text-center md:text-start flex-col md:flex-row items-center justify-center md:justify-center md:gap-0 gap-8 ">


//       <div className="flex w-full md:w-1/2 justify-center items-center p-8">
//         <div className="w-full max-w-md">
//           <h2 className="text-3xl font-bold mb-4">Create an account</h2>
//           <form className="flex flex-col space-y-4" onSubmit={handleSubmit(handleRegister)}>
//             <div>
//               <Input
//                 type="text"
//                 placeholder="Name"
//                 className="border p-3 rounded-lg outline-none"
//                 {...register('name')}
//               />

//               {errors.name?.message && <small className="text-red-600">{errors.name.message}</small>}

//             </div>

//             <div>
//               <Input
//                 type="email"
//                 placeholder="email"
//                 className="border p-3 rounded-lg outline-none"
//                 {...register('email')}
//               />

//               {errors.email?.message && <small className="text-red-600">{errors.email.message}</small>}

//             </div>

//             <div>
//               <Input
//                 type="password"
//                 placeholder="password"
//                 className="border p-3 rounded-lg outline-none"
//                 {...register('password')}
//               />

//               {errors.password?.message && <small className="text-red-600">{errors.password.message}</small>}

//             </div>

//             <div>
//               <Input
//                 type="password"
//                 placeholder="Confrim Password"
//                 className="border p-3 rounded-lg outline-none"
//                 {...register('rePassword')}
//               />

//               {errors.password?.message && <small className="text-red-600">{errors.password.message}</small>}

//             </div>

//             <div>
//               <Input
//                 type="tel"
//                 placeholder="phone"
//                 className="border p-3 rounded-lg outline-none"
//                 {...register('phone')}
//               />

//               {errors.phone?.message && <small className="text-red-600">{errors.phone.message}</small>}

//             </div>

//             {errorMsg && <p className="text-red-700 font-semibold text-center">{errorMsg}</p>}

//             <Button disabled={isLoading}
//               type="submit"
//               variant={"default"}
//               className="bg-red-500 text-white py-3 rounded-lg cursor-pointer hover:bg-red-600 transition" >
//               {isLoading ? "Loading..." : "Create Account"}
//             </Button>


//           </form>

//           <p className="text-center text-sm mt-6 text-gray-600">
//             Already have an account?{" "}
//             <Link href="/login" className="text-black font-bold border-b-2">
//               Log in
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div >
  );
} */
