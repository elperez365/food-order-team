import { useNavigate } from "react-router-dom";
import { login } from "../data/endpoints";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { setLogin, setUser } from "../redux/slices/loginSlice";
import { setCurrentView } from "../redux/slices/modalSlice";
import Button from "./UI/Button";

export default function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const dispatch = useAppDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await login(email, password);
      const data = await response.json();
      dispatch(setUser(data));
      dispatch(setLogin(true));
      dispatch(setCurrentView(""));
      navigate("/home");
    } catch (err) {
      //alert(err);
      console.log(err);

      setError(true);
    }
  };

  useEffect(() => {
    return () => {
      setEmail("");
      setPassword("");
      setError(false);
    };
  }, []);

  return (
    <div className="flex items-center justify-center">
      <form
        className="flex w-3/4 flex-col items-center justify-center text-center"
        onSubmit={handleSubmit}
      >
        <h2 className="mb-6 text-3xl font-bold">Login</h2>
        <label>Email</label>
        <input
          className="mb-4 w-full rounded border p-2"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          required
        />
        <label>Password</label>
        <input
          className="mb-4 w-full rounded border p-2"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          required
        />
        {error && (
          <p className="text-sm text-red-500">Invalid email or password</p>
        )}
        <div className="flex">
          <Button
            text="Cancel"
            style="textOnly"
            onClick={() => dispatch(setCurrentView(""))}
          />
          <Button text="Login" style="classic" type="submit" />
        </div>
      </form>
    </div>
  );
}
