import logo from "../assets/re-commerce.png";
import wallpaper from "../assets/wallpaper.png";
import Modal from "../components/Modal/Modal";
import Button from "../components/UI/Button";
import { useNavigate } from "react-router-dom";
import { setCurrentView } from "../redux/slices/modalSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import LoginForm from "../components/LoginForm";

const LandingPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const modalValue = useAppSelector((state) => state.modal.value);
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
        <Modal isOpen={modalValue === "login"}>
          <LoginForm key={modalValue} />
        </Modal>

        <Button
          text="Get Started"
          onClick={() => navigate("/home")}
          style="classicBounce"
        />
        <Button
          text="Login"
          onClick={() => dispatch(setCurrentView("login"))}
          style="classicBounce"
        />
      </div>
    </>
  );
};

export default LandingPage;
