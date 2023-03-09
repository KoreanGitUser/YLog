import { auth } from "@utils/firebase";
import { signOut } from "firebase/auth";
import PushBtn from "@styles/common/PushBtn";
import HomeContainer from "./HomeContainer";

const Home = () => {
  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="relative h-full w-full">
      <PushBtn onClick={logOut} className="absolute top-0 left-0 border-2">
        Log Out
      </PushBtn>
      {/* <HomeContainer /> */}
    </div>
  );
};

export default Home;
