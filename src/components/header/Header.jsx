import { useState, useEffect, useCallback } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import "./style.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";

const Header = () => {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const searchQueryHandler = useCallback(
    (e) => {
      if (e.key === "Enter" && query.length > 1) {
        navigate(`/search/${query}`);
        setShowSearch(false);
        setQuery("");
      }
    },
    [query, navigate]
  );

  const openSearchBar = () => {
    setMobileMenu(false);
    setShowSearch(!showSearch);
  };

  const openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false);
  };

  const navigationHandler = useCallback(
    (type) => {
      if (type === "movie") {
        navigate("/explore/movie");
      } else {
        navigate("/explore/tv");
      }
      setMobileMenu(false);
    },
    [navigate]
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > lastScrollY && !mobileMenu) {
        setShow("hide");
      } else {
        setShow("top");
      }
      setLastScrollY(scrollPosition);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, mobileMenu]);

  return (
    <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
      <ContentWrapper>
        <div className="logo">
          <img
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt=""
            onClick={() => navigate("/")}
          />
        </div>
        <ul className="menuItems">
          <li
            className="menuItem"
            onClick={() => {
              navigationHandler("tv");
            }}
          >
            TV Shows
          </li>
          <li
            className="menuItem"
            onClick={() => {
              navigationHandler("movie");
            }}
          >
            Movies
          </li>
          <li className={`searchBar ${showSearch ? "expanded" : ""}`}>
            <input
              type="text"
              placeholder="Search movie..."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
            />
            <div className="searchButton">
              <HiOutlineSearch
                className="searchBar__icon"
                onClick={openSearchBar}
              />
            </div>
          </li>
        </ul>

        {/* {mobile menu} */}

        <div className="mobileMenuItems">
          <div className={`msearchbar ${showSearch ? "mexpanded" : ""}`}>
            <input
              type="text"
              placeholder="Search movie..."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
            />
            <div className="msearchButton">
              <HiOutlineSearch
                className="msearchBar__icon"
                onClick={openSearchBar}
              />
            </div>
          </div>

          {mobileMenu ? (
            <VscChromeClose onClick={() => setMobileMenu(false)} />
          ) : (
            <SlMenu onClick={openMobileMenu} />
          )}
          {mobileMenu && (
            <ul className="mmenuItems">
              <li
                className="mmenuItem"
                onClick={() => {
                  navigationHandler("tv");
                }}
              >
                Tv Shows
              </li>
              <li
                className="mmenuItem"
                onClick={() => {
                  navigationHandler("movie");
                }}
              >
                Movies
              </li>
            </ul>
          )}
        </div>
      </ContentWrapper>
    </header>
  );
};

export default Header;
