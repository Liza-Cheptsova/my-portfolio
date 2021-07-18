import { NavLink } from "react-router-dom";
import s from "./Sidebar.module.css";

export const Sidebar = () => {
  return (
    <div className={s.sidebar_container}>
      <div className={s.menu}>
        <h1>Frontend dev</h1>
        <nav className={s.nav}>
          <NavLink to={"/home"} className={s.link} activeClassName={s.activeLink}>
            Home
          </NavLink>
          <NavLink to={"/about"} className={s.link} activeClassName={s.activeLink}>
            About
          </NavLink>
          <NavLink to={"/portfolio"} className={s.link} activeClassName={s.activeLink}>
            Portfolio
          </NavLink>
        </nav>
      </div>
    </div>
  );
};
