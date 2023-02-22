import { atom, RecoilState, selector, useRecoilValue } from "recoil";

interface AuthState {
  email: string;
  password: string;
}

const useAuth = {
  userAuth: atom<AuthState>({
    key: "email",
    default: {
      email: "",
      password: "",
    },
  }),

  isAuthenticated: atom({
    key: "isAuthenticated",
    default: false,
  }),

  //End of Func
};

export default useAuth;
