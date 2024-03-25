import { useNavigate } from "react-router-dom";
import { login } from "../data/endpoints";
import { useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { setLogin, setUser } from "../redux/slices/loginSlice";

export default function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(true);

  const dispatch = useAppDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await login(email, password);
      const data = await response.json();
      dispatch(setUser(data));
      dispatch(setLogin(true));
      navigate("/home");
    } catch (err) {
      alert(err);
      setError(true);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <form
        className="flex w-3/4 flex-col items-center justify-center md:w-1/4"
        onSubmit={handleSubmit}
      >
        <h1 className="mb-6 text-3xl font-bold">Login</h1>
        <input
          type="email"
          placeholder="Email"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && (
          <p className="text-sm text-red-500">Invalid email or password</p>
        )}
        <button className="btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
