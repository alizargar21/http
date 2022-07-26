import { NavLink, withRouter } from "react-router-dom";
import "./App.css";
const items = [
  { name: "Comments", to: "/", exact: true },
  { name: "Comments Details", to: "/commentsDetails" },
  { name: "Create Comment", to: "/createComment" },
];
const Navigation = () => {
  return (
    <nav>
      <ul className="NavList">
        {items.map((item) => {
          return (
            <li key={item.to}>
              <NavLink
                to={item.to}
                activeClassName="activeLink"
                exact={item.exact || false}
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default withRouter(Navigation);
