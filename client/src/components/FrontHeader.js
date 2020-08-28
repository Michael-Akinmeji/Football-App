import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const pages = [
  { title: "Home", link: "/" },
  { title: "Leaderboard", link: "/" },
  { title: "Support", link: "/support" },
  { title: "FAQ", link: "/faq" },
  { title: "Signin", link: "/login" },
];

const FrontHeader = ({ activePage }) => {
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
              style={{ color: "#FF3693", fontSize: "24px" }}
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
            </ul>
          </div>
        </div>
      </nav>
    </Header>
  );
};

const Header = styled.header`
  nav {
    background: #011b28;
    color: #ffffff;
    z-index: 3;
  }
  li {
    font-size: 18px;
    line-height: 12px;
  }
  a {
    color: #ffffff;
  }
  .active {
    color: #ff3693;
  }
`;

FrontHeader.propTypes = {
  activePage: PropTypes.string,
};

export default FrontHeader;
