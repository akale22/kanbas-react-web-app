import { Link } from "react-router-dom";
import { useLocation } from "react-router";

export default function AccountNavigation() {
  const { pathname } = useLocation();
  return (
    <div
      id="wd-account-navigation"
      className="wd list-group fs-5 rounded-0 pe-3"
    >
      <Link
        to={`/Kanbas/Account/Signin`}
        className={`list-group-item ${pathname.includes("Signin") ? "active text-black" : "text-danger"} border border-0`}
      >
        Signin
      </Link>
      <Link
        to={`/Kanbas/Account/Signup`}
        className={`list-group-item ${pathname.includes("Signup") ? "active text-black" : "text-danger"} border border-0`}
      >
        Signup
      </Link>
      <Link
        to={`/Kanbas/Account/Profile`}
        className={`list-group-item ${pathname.includes("Profile") ? "active text-black" : "text-danger"} border border-0`}
      >
        Profile
      </Link>
    </div>
  );
}
