import PATH from "@utils/routes/PATH";
import { Link } from "react-router-dom";

const Header = () => {
  const { HOME } = PATH;

  return (
    <header className="flex items-center justify-around h-[10%] w-full">
      <div className="w-1/2 justify-start ml-16">
        <Link to={HOME}>YLog</Link>
      </div>
      <div className="w-1/2">
        <span></span>
      </div>
    </header>
  );
};

export default Header;
