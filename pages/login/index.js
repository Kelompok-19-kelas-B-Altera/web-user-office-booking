import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React from "react";
import Home from "..";
import Login from "../../components/Login/login";

const ProtectedRoute = () => {
  const router = useRouter();
  if (!Cookies.get("token")) {
    return <Login />;
  }

  router.push("/");
  return <><Home /></>
};

export default ProtectedRoute;
