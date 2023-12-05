"use client";

import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

type FormInput = {
  email: string;
  password: string;
};

function Form() {
  const params = useSearchParams();
  const session = useSession();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormInput>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [error, setError] = useState("");

  useEffect(() => {
    setError(params.get("error") || "");
  }, [params]);

  if (session.status === "authenticated") {
    router?.push("/admin/cms");
  }

  const formSubmit = (form: FormInput) => {
    const { email, password } = form;
    signIn("credentials", {
      email,
      password,
    });
  };

  return (
    <form className="card-body" onSubmit={handleSubmit(formSubmit)}>
      <div className="form-control">
        <label htmlFor="email" className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          placeholder="email"
          className="input input-bordered"
          {...register("email", {
            required: "Email is required",
            pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
          })}
        />

        {errors.email?.message && <small className="block text-error w-full">{errors.email.message}</small>}
      </div>
      <div className="form-control">
        <label className="label" htmlFor="password">
          <span className="label-text">Password</span>
        </label>
        <input
          type="password"
          placeholder="password"
          className="input input-bordered"
          {...register("password", {
            required: "Password is required",
          })}
        />

        {errors.password?.message && <small className="block text-error w-full">{errors.password.message}</small>}
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary" disabled={isSubmitting}>
          Login
        </button>
      </div>
      <label className="label justify-center">
        <Link href="#" className="label-text-alt  link link-hover">
          Forgot password?
        </Link>
      </label>
    </form>
  );
}

export default Form;
