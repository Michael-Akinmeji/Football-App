import React, { useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import Signin from '../components/Signin';
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import theme from "../utils/theme";

const pages = [
  { title: "Home", link: "/" },
  { title: "Leaderboard", link: "/leaderboard" },
  { title: "Support", link: "/support" },
  { title: "FAQ", link: "/faq" },
];

const FrontHeader = ({ activePage, user }) => {

    const [showSignin, setShowSignin] = useState(false);

    const closeModal = () => {
        console.log('Close modal');
        setShowSignin(false);
    }

  return (
    <Header>
      <nav className="navbar fixed-top navbar-expand-lg py-3">
        <div className="container">
          <a className="navbar-brand" href="#">
            LOGO
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon
              icon={faBars}
              style={{ color: `${theme.colors.primary}`, fontSize: "24px" }}
            />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              {pages.map((page, i) => (
                <li key={i + 1} className="nav-item mx-3">
                  {/* Nextjs uses href attribute instead of "to" and an anchor tag */}
                  {/* Change the navbar to suit your needs */}
                  <Link href={page.link}>
                    <a
                      className={`nav-link ${
                        page.title === activePage ? "active" : ""
                      }`}
                    >
                      {page.title}
                    </a>
                  </Link>
                </li>
              ))}
              {
                <li className="nav-item mx-3">
                    <a className="nav-link cursor" onClick={() => setShowSignin(true)}>
                        Signin
                    </a>
                </li>
              }
              {
                  user ? 
                    <li className="nav-item mx-3 d-flex justify-content-center align-items-center">
                        <FontAwesomeIcon
                            icon={faUser}
                            style={{ color: `${theme.colors.light}`}}
                        />
                        <a className="nav-link ml-1">
                            {user}
                        </a>
                    </li> 
                    : null
              }
            </ul>
          </div>
        </div>
      </nav>
      {showSignin ? <Signin show={showSignin} closeModal={closeModal} /> : null}
    </Header>
  );
};

const Header = styled.header`
  nav {
    background: ${theme.colors.secondary};
    color: ${theme.colors.light};
    z-index: 3;
  }
  li {
    font-size: 18px;
    line-height: 12px;
  }
  a {
    color: ${theme.colors.light};
  }
  .active {
    color: ${theme.colors.primary};
  }
  .navbar-toggler {
      outline: none;
  }
  .cursor {
      cursor: pointer;
  }
`;

FrontHeader.propTypes = {
  activePage: PropTypes.string,
  user: PropTypes.string
};

export default FrontHeader;
