import PushBtn from "@styles/common/PushBtn";
import { auth, googleProvider } from "@utils/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import PATH from "@utils/routes/PATH";

const { SIGN_UP } = PATH;

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

  const onSubmit = (data: UserAuthState) => {
    signIn(data);
    console.log("보내는 데이터 :", data);
  };

  const signIn = async (data: UserAuthState) => {
    await signInWithEmailAndPassword(auth, data.email, data.password);
  };

  const signUpWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  const Styles = {
    input: "border-b-2 w-full border-gray-300 bg-white p-2 px-4 outline-none",
    section: "w-full h-full flex gap-4",
    label: "text-3xl w-1/3",
  };

  const { input, label, section } = Styles;
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <form
        className="flex flex-col justify-center items-start w-fit min-w-[30%] h-fit p-2 gap-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <section className={section}>
          <label className={label}>Email:</label>
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
              className={input}
              placeholder="check your email address"
              id="email"
              type="email"
            />
            {errors?.email && (
              <p className="text-red-500">{errors.email?.message}</p>
            )}
          </article>
        </section>
        <section className={section}>
          <label className={label}>Password:</label>
          <article>
            <input
              className={input}
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
        <PushBtn
          type="submit"
          className="text-xl border-2 p-2 px-4 rounded-md active:scale-95 active:bg-blue-400 duration-150"
        >
          Submit
        </PushBtn>
      </form>
      <FcGoogle
        size="40"
        className="rounded-full border p-1 cursor-pointer"
        onClick={signUpWithGoogle}
      />
      <Link to={SIGN_UP} className="text-2xl underline underline-offset-2">
        SignUp
      </Link>
    </div>
  );
};

export default Login;
