import { NavLink, withRouter } from "react-router-dom";

const item = [
  { name: "home", to: "/", exact: true },

];
const Navigation = () => {
  return (
    <nav>
      <ul>
        {item.map((item) => {
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
