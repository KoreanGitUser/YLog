import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PATH from "@utils/routes/PATH";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface IForm {
  email: string;
  password: string;
}

const queryClient = new QueryClient();

const Login = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactHookForm />
    </QueryClientProvider>
  );
};

const ReactHookForm = () => {
  const { API, LOGIN } = PATH;

  const {
    register,
    formState: { errors },
    watch,
    reset,
    handleSubmit,
    getValues,
    setError,
    setFocus,
  } = useForm<IForm>({
    mode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { email } = watch();
  const [emailValues, setEmailValute] = useState("");

  function onEmailChange(evt: React.ChangeEvent<HTMLInputElement>) {
    const emailValue = getValues("email");
    setEmailValute(emailValue);
  }

  // useEffect(() => {
  //   const data = axios
  //     .get(`${API}${LOGIN}`)
  //     .then((res) => res)
  //     .then((user) => user);
  //   reset({
  //     email: data.email,
  //     password: data.password,
  //     ...data,
  //   });
  // }, []);

  const onSubmit = (data: IForm) => {
    data;
  };

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen gap-2">
      {email === "jyh990605" && <div>장용호님의 아이디 입니다</div>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className="flex justify-center gap-4">
          <label className="text-4xl" htmlFor="email">
            Email:
          </label>
          <article>
            <input
              {...register("email", {
                required: "이메일을 입력해주세요",
                pattern: {
                  value:
                    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                  message: "올바른 이메일을 입력해주세요",
                },
              })}
              className="border-2 p-2 px-4 rounded-md outline-none"
              placeholder="check your email address"
              id="email"
              type="email"
              onChange={onEmailChange}
            />
            {errors?.email && (
              <p className="text-red-500">{errors.email?.message}</p>
            )}
          </article>
        </section>
        <section className="flex justify-center gap-4">
          <label className="text-4xl" htmlFor="email">
            Password:
          </label>
          <article>
            <input
              className="border-2 p-2 px-4 rounded-md outline-none"
              placeholder="typing your password"
              id="password"
              type="password"
              {...register("password", {
                required: "비밀번호를 입력해주세요",
                min: 8,
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$/i,
                  message: "올바른 비밀번호를 입력해주세요",
                },
              })}
            />
            {errors?.password && (
              <p className="text-red-500">{errors.password?.message}</p>
            )}
          </article>
        </section>
        <button
          type="submit"
          className="text-xl border-2 p-2 px-4 rounded-md active:scale-95 active:bg-blue-400 duration-150"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
