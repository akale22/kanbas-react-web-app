import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const active = (path: string) => (pathname.includes(path) ? "active" : "");
  const { pathname } = useLocation();
  return (
    <div
      id="wd-account-navigation"
      className="wd list-group fs-5 rounded-0 pe-3"
    >
      {links.map((link) => (
        <Link
          to={`/Kanbas/Account/${link}`}
          className={`list-group-item ${
            pathname.includes(link) ? "active text-black" : "text-danger"
          } border border-0`}
          key={link}
        >
          {link}
        </Link>
      ))}
      {currentUser?.role === "ADMIN" && (
        <Link
          to={`/Kanbas/Account/Users`}
          className={`list-group-item border-0 ${
            pathname.includes("Users") ? "active text-black" : "text-danger"
          } ${active("Users")}`}
        >
          {" "}
          Users{" "}
        </Link>
      )}
    </div>
  );
}
