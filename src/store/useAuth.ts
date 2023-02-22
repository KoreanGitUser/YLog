import { atom, RecoilState, selector, useRecoilValue } from "recoil";

interface AuthState {
  isAuthenticated: RecoilState<boolean>;

  login: (isAuthenticated: RecoilState<boolean>) => boolean;
}

const useAuth: AuthState = {
  isAuthenticated: atom({
    key: "isAuthenticated",
    default: false,
  }),

  login: (isAuthenticated) => {
    const isAuth = selector({
      key: "isAuth",
      get: ({ get }) => {
        const acceptAuth = !get(isAuthenticated);
        return acceptAuth;
      },
    });

    return useRecoilValue(isAuth);
  },
  //End of Func
};

export default useAuth;
