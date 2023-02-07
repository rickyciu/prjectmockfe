import react from "react";
import Link from "next/link";

export default function Header() {
  const logoutHandler = async () => {
    localStorage.removeItem("accessToken");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark rounded">
      <Link className="navbar-brand" href="/home">
        ToDoList
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav end">
          <li className="nav-item">
            <Link className="nav-link" onClick={logoutHandler} href="/">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
