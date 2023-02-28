import { auth } from "@utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

interface UserAuthState {
  email: string;
  password: string;
  comfirmPassword: string;
}

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<UserAuthState>({
    mode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
      comfirmPassword: "",
    },
  });

  const onSubmit = (data: UserAuthState) => {
    signUp(data);
    console.log("보내는 데이터 :", data);
  };

  useEffect(
    () => console.log("현재 로그인된 이메일 아이디: ", auth.currentUser?.email),
    []
  );

  const signUp = async (data: UserAuthState) => {
    await createUserWithEmailAndPassword(auth, data.email, data.password);
  };

  // use form pattern
  const patterns = {
    email:
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$/i,
  };

  const Styles = {
    input: "border-b-2 w-5/6 border-gray-300 bg-white p-2 px-4 outline-none",
    section: "w-full h-full flex gap-4",
    label: "text-4xl w-1/2",
  };

  const { input, section, label } = Styles;

  return (
    <div className="w-full h-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center items-start w-fit min-w-[40%] h-fit p-2 gap-2"
      >
        <section className={section}>
          <label className={label} htmlFor="email">
            Email:
          </label>
          <article className="w-1/2">
            <input
              {...register("email", {
                required: "사용하실 이메일 아이디를 입력해주세요",
                pattern: {
                  value: patterns.email,
                  message: "올바른 이메일을 입력해주세요",
                },
              })}
              className={input}
              placeholder="enter your email address"
              id="email"
              type="email"
            />
            {errors?.email && (
              <p className="text-red-500">{errors.email?.message}</p>
            )}
          </article>
        </section>
        <section className={section}>
          <label className={label} htmlFor="email">
            Password:
          </label>
          <article className="w-1/2">
            <input
              className={input}
              placeholder="enter your password"
              id="password"
              type="password"
              {...register("password", {
                required:
                  "최소 8자리 이상 : 영어 대문자, 소문자, 숫자, 특수문자 중 3종류 조합",
                min: 8,
                pattern: {
                  value: patterns.password,
                  message: "올바른 비밀번호를 입력해주세요",
                },
              })}
            />
            {errors?.password && (
              <p className="text-red-500">{errors.password?.message}</p>
            )}
          </article>
        </section>
        <section className={section}>
          <label className={label} htmlFor="email">
            Verify Password:
          </label>
          <article className="w-1/2">
            <input
              {...register("comfirmPassword", {
                required: "비밀번호를 한번 더 확인해주세요",
                validate: (val: string) => {
                  if (watch("password") !== val) {
                    return "비밀번호가 일치하지 않습니다 다시 한번 확인해주세요";
                  }
                },
              })}
              className={input}
              placeholder="enter your confirm password"
              id="comfirmPassword"
              type="password"
            />
            {errors?.comfirmPassword && (
              <p className="text-red-500">{errors.comfirmPassword?.message}</p>
            )}
          </article>
        </section>
        <button
          type="submit"
          className="text-xl border-2 border-gray-400 p-2 px-4 rounded-md active:scale-95 active:bg-blue-400 duration-150"
          disabled={!watch("comfirmPassword")}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;
