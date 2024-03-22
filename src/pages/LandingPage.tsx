import logo from "../assets/re-commerce.png";
import wallpaper from "../assets/wallpaper.png";
import Button from "../components/UI/Button";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="bg-wallpaper relative z-0 flex h-screen w-screen flex-col items-center justify-center bg-cover bg-center "
        style={{
          backgroundImage: `linear-gradient(rgba(215, 201, 170, 0.8), rgba(215, 201, 170, 0.8)), url(${wallpaper})`,
        }}
      >
        <img src={logo} className="w-3/4 drop-shadow-lg md:w-2/6" alt="logo" />
        <p className="mb-6 text-xl font-bold text-midnightGreen md:text-3xl">
          Renew Reuse Save
        </p>

        <Button
          text="Get Started"
          onClick={() => navigate("/home")}
          style="classicBounce"
        />

        {/* <div className="absolute left-0 top-0 z-0 flex h-screen w-screen items-center justify-center opacity-50">
          <div className="bg-wallpaper z-10 h-full w-full"></div>
        </div> */}
      </div>
    </>
  );
};

export default LandingPage;
