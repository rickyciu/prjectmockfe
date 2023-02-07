import { Alert, Container } from "reactstrap";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import CustomButton from "../component/Button";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [nulluser, setnulluser] = useState(false);
  const [lowuser, setlowuser] = useState(false);
  const [nullpassword, setnullpassword] = useState(false);
  const [lowpassword, setlowpassword] = useState(false);

  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const registerHandler = async (e) => {
    e.preventDefault();
    setlowuser(false);
    setnullpassword(false);
    setnulluser(false);
    setlowpassword(false);
    if (username.length <= 5) {
      if (username == "") {
        setnulluser(true);
      } else {
        setlowuser(true);
      }
    }
    if (password.length <= 5) {
      if (password == "") {
        setnullpassword(true);
      } else {
        setlowpassword(true);
      }
    }
    if (username.length > 5 && password.length > 5) {
      try {
        setIsLoading(true);
        const register = await axios.post("http://localhost:3001/register", {
          username:username,
          password:password,
        });
        router.push("/");
        setIsLoading(false);
      } catch (err) {
        router.push("/404");
      }
    }
  };
  return (
    <div className="background">
      <div className="form">
        <Container className="text-center title--login">
          <h1>REGISTER</h1>
        </Container>
        <form onSubmit={registerHandler}>
          <div className="mb-3">
            <label className="form-label text--style">Username</label>
            <input
              type="text"
              className="form-control input--style"
              placeholder="ex:John123"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              data-testid="username"
            ></input>
            {nulluser ? (
              <div id="emailHelp" className="wrong">
                USERNAME CANNOT BE EMPTY
              </div>
            ) : null}
            {lowuser ? (
              <div id="emailHelp" className="wrong">
                USERNAME CANNOT LOWER THAN 6 CHARACTER
              </div>
            ) : null}
          </div>
          <div className="mb-3">
            <label className="form-label text--style">Password</label>
            <input
              type="password"
              className="form-control input--style"
              placeholder="ex:1234"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              data-testid="password"
            ></input>
            {nullpassword ? (
              <div id="emailHelp" className="wrong">
                PASSWORD CANNOT BE EMPTY
              </div>
            ) : null}
            {lowpassword ? (
              <div id="emailHelp" className="wrong">
                PASSWORD CANNOT LOWER THAN 6 CHARACTER
              </div>
            ) : null}
          </div>
          <CustomButton type={"submit"} isLoading={isLoading} label="Submit" />
          <Link
            style={{ marginLeft: "5px" }}
            className="btn btn-danger"
            href="/"
            disabled={isLoading}
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  );
}
