"use client"
import Image from "next/image";
import React from "react";
import login from "@/assets/images/login.jpg";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import * as zod from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
export default function Register() {


  const schema = zod.object({
    name: zod.string().nonempty('Name is Required'),
    email: zod.email().nonempty('email is Required'),
    password: zod.string().nonempty('password is Required'),
    rePassword: zod.string().nonempty('Confirm Password is Required'),
    phone: zod.string().nonempty('phone is Required')
  }).refine(function (values) {

    return values.password === values.rePassword

  }

    , {

      error: "pass is notValid",
      path: ['rePassword']
    })

  interface IRegisterBody {
    name: string,
    email: string,
    password: string
    rePassword: string
    phone: string
  }


  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      "name": "",
      "email": "ahmedmuttii4012@gmail.com",
      "password": "Ahmed@123",
      "rePassword": "Ahmed@123",
      "phone": "123456789"
    },
    resolver: zodResolver(schema),
    mode: 'all'
  });

  function handleRegister(values: IRegisterBody) {
    fetch('https://ecommerce.routemisr.com/api/v1/auth/signup'), {
      method: "POST",
      bod
    }

    console.log(values);

  }

  console.log(errors);

  return (
    <div className="flex min-h-10">
      <div className="relative w-1/2 ml-5 mt-3 hidden md:block">
        <Image
          src={login}
          alt="Shopping login"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="flex w-full md:w-1/2 justify-center items-center p-8">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-4">Create an account</h2>
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit(handleRegister)}>
            <div>
              <Input
                type="text"
                placeholder="Name"
                className="border p-3 rounded-lg outline-none"
                {...register('name')}
              />

              {errors.name?.message && <small className="text-red-600">{errors.name.message}</small>}

            </div>

            <div>
              <Input
                type="email"
                placeholder="email"
                className="border p-3 rounded-lg outline-none"
                {...register('email')}
              />

              {errors.email?.message && <small className="text-red-600">{errors.email.message}</small>}

            </div>

            <div>
              <Input
                type="password"
                placeholder="password"
                className="border p-3 rounded-lg outline-none"
                {...register('password')}
              />

              {errors.password?.message && <small className="text-red-600">{errors.password.message}</small>}

            </div>

            <div>
              <Input
                type="password"
                placeholder="Confrim Password"
                className="border p-3 rounded-lg outline-none"
                {...register('password')}
              />

              {errors.password?.message && <small className="text-red-600">{errors.password.message}</small>}

            </div>

            <div>
              <Input
                type="tel"
                placeholder="phone"
                className="border p-3 rounded-lg outline-none"
                {...register('phone')}
              />

              {errors.phone?.message && <small className="text-red-600">{errors.phone.message}</small>}

            </div>


            <button
              type="submit"
              className="bg-red-500 text-white py-3 rounded-lg cursor-pointer hover:bg-red-600 transition"
            >
              Create Account
            </button>


          </form>

          <p className="text-center text-sm mt-6 text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-black font-bold border-b-2">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
