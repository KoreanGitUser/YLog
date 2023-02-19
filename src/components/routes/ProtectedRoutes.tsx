import MainPage from "@pages/protected/MainPage";
import PATH from "@utils/routes/PATH";
import { Navigate, Route, Routes } from "react-router-dom";

const ProtectedRoutes = () => {
  const { LOGIN } = PATH;
  return (
    <Routes>
      <Route path={LOGIN} element={<MainPage />} />
      <Route path="*" element={<Navigate replace to={LOGIN} />} />
    </Routes>
  );
};

export default ProtectedRoutes;
