import { FaTh, FaUserAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Sidebar.scss";

const Sidebar = ({ children }) => {
  const menuItem = [
    {
      path: "/",
      name: "Рабочее окно",
      icon: <FaTh />,
    },
    {
      path: "/about",
      name: "Профиль",
      icon: <FaUserAlt />,
    },
  ];
  return (
    <div className="container">
      <div className="sidebar">
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div className="link_text">{item.name}</div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
