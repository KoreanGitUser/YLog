import LoginPage from "@pages/unAuth/LoginPage";
import PATH from "@utils/routes/PATH";
import { Navigate, Route, Routes } from "react-router-dom";

const { LOGIN } = PATH;

const UnAuthRoutes = () => {
  return (
    <Routes>
      <Route path={LOGIN} element={<LoginPage />} />
      <Route path="*" element={<Navigate replace to={LOGIN} />} />
    </Routes>
  );
};

export default UnAuthRoutes;
