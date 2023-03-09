import { useLayoutEffect, useState } from "react";
import UnAuthRoutes from "@components/routes/UnAuthRoutes";
import { useLocation } from "react-router-dom";
import { auth } from "@utils/firebase";
import ProtectedRoutes from "@components/routes/ProtectedRoutes";
import Header from "@components/header/Header";

const App = () => {
  const location = useLocation();
  const [currentRoutes, setCurrentRoutes] = useState<React.ReactNode>();
  const currentUserEmail = auth.currentUser?.email;

  useLayoutEffect(() => {
    console.log("현재 로그인된 이메일 아이디:", currentUserEmail);
    console.log("현재 경로:", location.pathname);
    const currentRoutes = currentUserEmail ? (
      <ProtectedRoutes />
    ) : (
      <UnAuthRoutes />
    );
    setCurrentRoutes(currentRoutes);
  }, [currentUserEmail]);

  return (
    <div className="w-screen h-screen scrollbar-hide">
      <Header />
      <main>{currentRoutes}</main>
    </div>
  );
};

export default App;
