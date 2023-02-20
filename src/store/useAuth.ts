import { atom, RecoilState, selector, useRecoilValue } from "recoil";

interface AuthState {
  userEmail: RecoilState<string>;
  userPassowrd: RecoilState<string>;
  isAuthenticated: RecoilState<boolean>;
}

const useAuth: AuthState = {
  userEmail: atom({
    key: "email",
    default: "",
  }),

  userPassowrd: atom({
    key: "password",
    default: "",
  }),

  isAuthenticated: atom({
    key: "isAuthenticated",
    default: false,
  }),

  //End of Func
};

export default useAuth;
