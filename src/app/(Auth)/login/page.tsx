"use client";
import LoginFormType from "./LoginFrom";

export default function LoginPage() {
  return (
    <>
      <div>
        <h2 className="text-3xl text-center font-semibold mb-6 mt-8">
          Login to your account
        </h2>
        <LoginFormType />
      </div>
    </>
  );
}
