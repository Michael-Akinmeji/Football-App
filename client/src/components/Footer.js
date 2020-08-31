import React from "react";
import Link from "next/link";

import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import theme from "../utils/theme";

const pages = [
    { title: "Home", link: "/" },
    { title: "Leaderboard", link: "/" },
    { title: "Support", link: "/support" },
    { title: "FAQ", link: "/faq" },
    { title: "Login", link: "/login" },
];

const Footer = () => {
  return (
      <FooterContainer>
          <footer className="footer-section">
            <section className="d-flex flex-column justify-content-center align-items-center">
                    <h3 className="text-center mb-3">Logo</h3>
                    <ul className="d-flex flex-wrap justify-content-center align-items-center mb-3">
                        {pages.map((page, i) => (
                            <li key={i + 1} className="nav-item">
                                <Link href={page.link}>
                                    <a className="nav-link">{page.title}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="contact mb-5">
                        <p className="d-flex justify-content-center align-items-center contact-email"><FontAwesomeIcon icon={faEnvelope} /> &nbsp; footyleague@gmail.com</p>
                        <p className="d-flex justify-content-center align-items-center contact-phone"><FontAwesomeIcon icon={faPhoneAlt} /> &nbsp; +2347063215297</p>
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <p className=" text-center">Privacy policy | Terms of Use</p>
                        <p className="text-center">Copyright &copy; Footy league, LLC. All rights reserved.</p>
                    </div>
            </section>
        </footer>
      </FooterContainer>
  );
};

const FooterContainer = styled.footer`
    .footer-section {
        background: ${theme.colors.secondary};
        padding: 32px;
        color: ${theme.colors.light};
    }
    ul {
        list-style: none;
        padding: 0;
    }
    ul li {
        margin: 0 .5rem;
    }
    a {
        color: ${theme.colors.light};
        font-size: 16px;
        line-height: 25px;
    }
    p {
        font-size: 14px;
        line-height: 21px;
    }
    .contact {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .contact-email {
        margin: 0 1.5rem;
    }
    .contact-phone {
        margin: 0 1.5rem;
    }
    @media only screen and (max-width: 767px) {
        ul li {
            margin: 0;
        }
        .contact {
            flex-direction: column;
        }
        .contact-email {
            margin-right: 0.5rem;
        }
        .contact-phone {
            margin: 0;
        }
    }
`;

export default Footer;
