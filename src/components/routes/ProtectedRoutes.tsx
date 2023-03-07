import MainPage from "@pages/protected/MainPage";
import PATH from "@utils/routes/PATH";
import { Navigate, Route, Routes } from "react-router-dom";

const ProtectedRoutes = () => {
  const { HOME } = PATH;
  return (
    <Routes>
      <Route path={HOME} element={<MainPage />} />
      <Route path="*" element={<Navigate replace to={HOME} />} />
    </Routes>
  );
};

export default ProtectedRoutes;
