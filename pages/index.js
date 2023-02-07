import { Container, Spinner } from "reactstrap";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useSelector, useDispatch, Provider } from "react-redux";
import { getUserAsync } from "../store/cart/todoSlice";
import CustomButton from "../component/Button";
import { getPlayerAsync } from "../store/cart/userSlice";

export default function Login() {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [nullusername, setnullUsername] = useState(false);
  const [nullpassword, setnullpassword] = useState(false);

  const load = useSelector((state) => {
    return state.user.isLoading;
  });
  const router = useRouter();
  const loginHandler = async (e) => {
    e.preventDefault();
    setnullUsername(false);
    setnullpassword(false);
    if (username == "") {
      setnullUsername(true);
    }
    if (password == "") {
      setnullpassword(true);
    }

    if (username && password) {
      try {
        const login = await axios.post("http://localhost:3001/login", {
          username,
          password,
        });
          console.log("logindata",login);
          console.log("kebenaran",login.data)
          dispatch(getPlayerAsync(login.data.id));
        localStorage.setItem("accessToken", login.data.token);
        router.push("/home");
      } catch (err) {
        router.push("/");
      }
    }
  };
  return (
    <div className="background">
      <div className="form">
        <Container className="text-center margin--header">
          <h1 className="title--login">LOGIN PAGE</h1>
        </Container>
        <Container className="margin--form">
          <div className="mb-3">
            <label className="form-label text--style">Username</label>
            <input
              type="text"
              className="form-control input--style "
              placeholder="ex:Jhon"
              disabled={load}
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
            {nullusername ? (
              <div id="emailHelp" className="wrong">
                Username CANNOT BE EMPTY
              </div>
            ) : null}
          </div>
          <div className="mb-3">
            <label className="form-label text--style">Password</label>
            <input
              type="password"
              className="form-control input--style"
              placeholder="ex:1234"
              disabled={load}
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              data-testid="password"
            ></input>
            {nullpassword ? (
              <div id="emailHelp" className="wrong">
                PASSWORD CANNOT BE EMPTY
              </div>
            ) : null}
          </div>
          <Link href={load ? "#" : "/register"}>
            <button className="btn btn-danger" disabled={load}>
              Register
            </button>
          </Link>{" "}
          <CustomButton onClick={loginHandler} isLoading={load} label="Login" />
        </Container>
      </div>
    </div>
  );
}
