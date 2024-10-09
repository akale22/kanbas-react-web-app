import { Link } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { useLocation } from "react-router";

export default function KanbasNavigation() {
  const { pathname } = useLocation();
  return (
    <div id="wd-kanbas-navigation" style={{ width: 110 }} 
         className="list-group rounded-0 position-fixed
         bottom-0 top-0 d-none d-md-block bg-black z-2">

      <a id="wd-neu-link" target="_blank" 
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center">
        <img src="/images/NEU.png" width="75px" /></a>
        
      <Link to="/Kanbas/Account" id="wd-account-link"
        className={`list-group-item text-center border-0 bg-${pathname.includes("Account") ? "white" : "black"} text-${pathname.includes("Account") ? "black" : "white"}`}>
        <FaRegCircleUser className={`fs-1 text text-${pathname.includes("Account") ? "black" : "white"}`}/><br />
        Account </Link>

      <Link to="/Kanbas/Dashboard" id="wd-dashboard-link"
        className={`list-group-item text-center border-0 bg-${pathname.includes("Dashboard") ? "white" : "black"} text-${pathname.includes("Dashboard") ? "danger" : "white"}`}>
        <AiOutlineDashboard className="fs-1 text-danger" /><br />
        Dashboard </Link>

      <Link to="/Kanbas/Dashboard" id="wd-course-link"
        className={`list-group-item text-center border-0 bg-${pathname.includes("Courses") ? "white" : "black"} text-${pathname.includes("Courses") ? "danger" : "white"}`}>
        <LiaBookSolid className="fs-1 text-danger" /><br />
        Courses </Link>

      <Link to="/Kanbas/Calendar" id="wd-calendar-link"
        className={`list-group-item text-center border-0 bg-${pathname.includes("Calendar") ? "white" : "black"} text-${pathname.includes("Calendar") ? "danger" : "white"}`}>
        <IoCalendarOutline className="fs-1 text-danger" /><br />
        Calendar </Link>

      <Link to="/Kanbas/Inbox" id="wd-inbox-link"
        className={`list-group-item text-center border-0 bg-${pathname.includes("Inbox") ? "white" : "black"} text-${pathname.includes("Inbox") ? "danger" : "white"}`}>
        <FaInbox className="fs-1 text-danger" /><br />
      Inbox</Link>

      <Link to="/Labs" id="wd-labs-link"
        className={`list-group-item text-center border-0 bg-${pathname.includes("Labs") ? "white" : "black"} text-${pathname.includes("Labs") ? "danger" : "white"}`}>
        <LiaCogSolid className="fs-1 text-danger" /><br />
      Labs</Link>
    </div>
);}