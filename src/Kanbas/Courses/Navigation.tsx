import { Link } from "react-router-dom";
import { useLocation, useParams } from "react-router";

export default function CoursesNavigation() {
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ];
  const { pathname } = useLocation();
  const { cid } = useParams();
  return (
    <div
      id="wd-courses-navigation"
      className="wd list-group fs-5 rounded-0 me-3"
    >
      {links.map((link) => (
        <>
          <Link
            to={`/Kanbas/Courses/${cid}/${link}`}
            key={link}
            className={`list-group-item border border-0 mb-4 ${pathname.includes(link) ? "active" : "text-danger"}`}>
            {link}
          </Link>
        </>
      ))}
    </div>
  );
}
