import Cookies from "js-cookie";
import Head from "next/head";
import { useRouter } from "next/router";
import { isExpired, decodeToken } from "react-jwt";

import Profile from "../../components/Profile";

const ProfilePage = () => {
  const router = useRouter();
  const { email } = router.query;

  const token = Cookies.get("token");
  const tokenDecoded = decodeToken(token);

  return (
    <div>
      <Head>
        <title>Officity | {tokenDecoded?.fullname}</title>
        <link rel="icon" href="/officity-logo.svg" />
      </Head>
      <Profile
        emailUser={tokenDecoded?.email}
        fullNameUser={tokenDecoded?.fullname}
      />
    </div>
  );
};

export default ProfilePage;
