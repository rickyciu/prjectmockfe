import "../styles/globals.css";
import "../styles/Pages.css";
import "../styles/login.css";
import "../styles/Header.css";
import "../styles/Footer.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Provider, useSelector, useDispatch } from "react-redux";
import { store } from "../store";
import { getPlayerAsync } from "../store/cart/userSlice";
import { useEffect } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const cektoken = localStorage.getItem("accessToken");
    if (cektoken) {
         if (
        router.route == "/") {
        router.replace("/home");
      }
    } else if (!cektoken && router.route == "/") {
      router.replace("/");
    } else {
      router.replace("/");
    }
  }, [router.route]);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
  }

export default MyApp;
