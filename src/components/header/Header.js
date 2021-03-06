/* eslint-disable jsx-a11y/anchor-is-valid */
import { Dropdown, Menu } from "antd";
import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useLocation, matchPath } from "react-router-dom";
import { ROUTER_PATH } from "../../common/routerLink";
import { actHeader } from "../../redux/actions/header/headerAction";
import Accout from "../accountAuthor/Accout";
import "./style.scss";
import "antd/dist/antd.css";

const Header = () => {
  const { profile } = useSelector((state) => state.authReducer);
  const headerRef = useRef(null);
  const { pathname } = useLocation();
  const history = useHistory();

  const dispatch = useDispatch();
  const menu = (
    <Menu
      items={[
        {
          label: (
            <a target="_blank" onClick={() => handleLogout()}>
              Log out
            </a>
          ),
          key: "1",
        },
      ]}
    />
  );
  useEffect(() => {
    const header = headerRef.current;

    const handleBackColorHeader = () => {
      if (window.scrollY > 0) {
        header.classList.add("bg-white");
      } else {
        header.classList.remove("bg-white");
      }
    };

    document.addEventListener("scroll", handleBackColorHeader);
    return () => document.removeEventListener("scroll", handleBackColorHeader);
  }, []);

  useEffect(() => {
    const header = headerRef.current;
    const headerHeight = header.scrollHeight;
    dispatch(actHeader(headerHeight));
  }, [dispatch]);

  useEffect(() => {
    //call api check isAdmin
  }, [dispatch]);

  const handleToLogin = () => {
    history.push(ROUTER_PATH.LOGIN.path);
  };
  const handleLogout = () => {
    localStorage.removeItem("Email");
    localStorage.removeItem("Role");
    localStorage.removeItem("Avatar");

    history.push(ROUTER_PATH.LOGIN.path);
  };

  const handleCheckActive = (path) => {
    const active = !!matchPath(pathname, {
      path,
      exact: true,
    })
      ? "navigation_link active"
      : "navigation_link";
    return active;
  };

  console.log();
  return (
    <div ref={headerRef} className="header ">
      <div className="container flex justify-between items-center">
        <div className="logo-wrapp">
          <h2 className="logo_title">
            <Link to={ROUTER_PATH.HOME.path}>NikaStore</Link>
          </h2>
        </div>
        <ul className="navigation flex gap-5">
          <li className="navigation_item">
            <Link
              to={ROUTER_PATH.HOME.path}
              className={handleCheckActive(ROUTER_PATH.HOME.path)}
            >
              Home
            </Link>
          </li>
          <li className="navigation_item">
            <Link
              to={ROUTER_PATH.SHOP.path}
              className={handleCheckActive(ROUTER_PATH.SHOP.path)}
            >
              Shop
            </Link>
          </li>
          <li className="navigation_item">
            <Link
              to={ROUTER_PATH.BLOG.path}
              className={handleCheckActive(ROUTER_PATH.BLOG.path)}
            >
              Blog
            </Link>
          </li>
          {/* <li className="navigation_item">
            <Link
              to={ROUTER_PATH.DETAIL.path}
              className={handleCheckActive(ROUTER_PATH.DETAIL.path)}
            >
              Detail
            </Link>
          </li> */}
          {localStorage.getItem("Role") === "admin" && (
            <li className="navigation_item">
              <Link
                to={ROUTER_PATH.ADMIN.path}
                className={handleCheckActive(ROUTER_PATH.ADMIN.path)}
              >
                Admin
              </Link>
            </li>
          )}

          <li className="navigation_item">
            <Link
              to={ROUTER_PATH.CONTACT.path}
              className={handleCheckActive(ROUTER_PATH.CONTACT.path)}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="flex  justify-between items-center gap-5 ">
          {Object.keys(profile).length <= 0 ? (
            <button
              className="btn-nav btn-login active_btn"
              onClick={handleToLogin}
            >
              Login
            </button>
          ) : (
            <Accout profile={profile}></Accout>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
