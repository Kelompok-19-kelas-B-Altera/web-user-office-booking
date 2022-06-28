import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { isExpired, decodeToken } from "react-jwt";

import Profile from "../../components/Profile";

const ProfilePage = () => {
  const router = useRouter();
  const { email } = router.query;

  const token = Cookies.get("token");
  const tokenDecoded = decodeToken(token)

  return(
    <div>
      <Profile emailUser={tokenDecoded?.email} fullNameUser={tokenDecoded?.fullname} />
    </div>
  )
}

export default ProfilePage;