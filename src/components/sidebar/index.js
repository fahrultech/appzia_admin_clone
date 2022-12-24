import React, { useState } from "react";
import { Link } from "react-router-dom";
import sidebarmenuitems from "../../data/sidebarItems.json";

const Sidebar = () => {
  let menuOriginalState = {};
  sidebarmenuitems.map((item) => {
    menuOriginalState[item.name] = false;
  });

  const [smenu, setSmenu] = useState(menuOriginalState);

  const submenu = (e) => {
    setSmenu({
      ...menuOriginalState,
      [e.currentTarget.getAttribute("name")]:
        !smenu[e.currentTarget.getAttribute("name")],
    });
  };

  return (
    <>
      {sidebarmenuitems.map((sidebar) =>
        !sidebar.submenu ? (
          <li className="text-[15px]">
            <Link className="block px-[25px] py-[12px] space-x-3" to="/">
              <i className={`text-[18px] mdi ${sidebar.icon}`}></i>
              <span>{sidebar.title}</span>
            </Link>
          </li>
        ) : (
          <li className="has-menu">
            <Link
              onClick={submenu}
              className={`px-[25px] py-[12px] block space-x-3 ${
                smenu[sidebar.name] ? "active" : ""
              }`}
              to="#"
              name={sidebar.name}
            >
              <i className={`text-[18px] mdi ${sidebar.icon}`}></i>
              <span>{sidebar.title}</span>
              <span className="float-right">
                <i
                  className={`${
                    smenu[sidebar.name] ? "mdi mdi-minus" : "mdi mdi-plus"
                  }`}
                ></i>
              </span>
            </Link>
            <ul
              className={`${
                smenu[sidebar.name] ? `max-h-[${sidebar.height}px]` : `max-h-0`
              } transition-all duration-[0.5s] overflow-hidden`}
            >
              {sidebar.submenuItems.map((item, index) => (
                <li key={index}>
                  <Link className="whitespace-nowrap" to={item.link}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        )
      )}
    </>
  );
};

export default Sidebar;
