import Button from "../components/UI/Button";
import { TbMoodConfuzed } from "react-icons/tb";

import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center gap-4">
      <section className=" flex animate-[slideUp_650ms_ease-in-out_forwards] cursor-pointer flex-wrap items-center justify-center">
        <h2>Page Not Found</h2>
        <h1 className="text-9xl">404</h1>
        <TbMoodConfuzed className="animate-[spin_5s_linear_infinite_forwards] text-9xl transition-all   duration-500 hover:text-amber-500/90" />
      </section>
      <Button
        text="Go Back Home 🏠"
        onClick={() => navigate("/home")}
        style="classic"
      />
    </main>
  );
};

export default ErrorPage;
