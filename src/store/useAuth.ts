import { atom } from "recoil";

const authState = () => {
  const userEmail = atom<string>({
    key: "userEmail",
    default: "",
  });

  const password = atom<string>({
    key: "password",
    default: "",
  });
};

export default authState;
