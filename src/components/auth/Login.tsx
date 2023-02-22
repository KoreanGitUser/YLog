import useAuth from "@store/useAuth";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";

interface UserAuthState {
  email: string;
  password: string;
}

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<UserAuthState>({
    mode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { isAuthenticated, userAuth } = useAuth;
  const [emailPassword, setEmailPassword] = useRecoilState(userAuth);

  const onSubmit = (data: UserAuthState) => {
    setEmailPassword(data);
    // console.log("보내는 데이터 :", data);
  };

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen gap-2">
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
