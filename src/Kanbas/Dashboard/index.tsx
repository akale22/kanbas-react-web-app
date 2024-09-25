import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>
                 CS1234 React JS
              </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1235/Home">
            <img src="/images/angularjs.png" width={200} />
            <div>
              <h5>
                 CS1235 Angular JS
              </h5>
              <p className="wd-dashboard-course-title">
                Learn Angular Front-End Dev
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1236/Home">
            <img src="/images/sql.png" width={200} />
            <div>
              <h5>
                 CS1236 SQL
              </h5>
              <p className="wd-dashboard-course-title">
                Database Interactions
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1237/Home">
            <img src="/images/aws.png" width={200} />
            <div>
              <h5>
                 CS1237 AWS
              </h5>
              <p className="wd-dashboard-course-title">
                Learn Cloud Services
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1238/Home">
            <img src="/images/firebase.png" width={200} />
            <div>
              <h5>
                 CS1238 Firebase
              </h5>
              <p className="wd-dashboard-course-title">
                Real-time backend platform
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1239/Home">
            <img src="/images/azure.jpg" width={200} />
            <div>
              <h5>
                 CS1239 Azure
              </h5>
              <p className="wd-dashboard-course-title">
                Cloud computing service platform
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1240/Home">
            <img src="/images/python.jpeg" width={200} />
            <div>
              <h5>
                 CS1240 Python
              </h5>
              <p className="wd-dashboard-course-title">
              Versatile high-level programming language
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
