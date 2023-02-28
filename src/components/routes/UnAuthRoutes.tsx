import SignUp from "@components/auth/SignUp";
import LoginPage from "@pages/unAuth/LoginPage";
import PATH from "@utils/routes/PATH";
import { Navigate, Route, Routes } from "react-router-dom";

const { LOGIN, SIGN_UP } = PATH;

const UnAuthRoutes = () => {
  return (
    <Routes>
      <Route path={LOGIN} element={<LoginPage />} />
      <Route path={SIGN_UP} element={<SignUp />} />
      <Route path="*" element={<Navigate replace to={SIGN_UP} />} />
    </Routes>
  );
};

export default UnAuthRoutes;
