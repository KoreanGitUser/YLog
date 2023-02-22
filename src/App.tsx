import { useEffect, useState } from "react";
import UnAuthRoutes from "@components/routes/UnAuthRoutes";
import { useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
  const [currentRoutes, setCurrentRoutes] = useState<React.ReactNode>();

  useEffect(() => {
    // const currentRoutes  =
  }, []);

  return (
    <div>
      <UnAuthRoutes />
    </div>
  );
};

export default App;
