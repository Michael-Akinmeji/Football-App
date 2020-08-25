import React from "react";
import Link from "next/link";

const pages = [
  { title: "Home", link: "/" },
  { title: "Support", link: "/support" },
  { title: "FAQ", link: "/faq" },
  { title: "Login", link: "/login" },
  { title: "Signup", link: "/signup" },
];

const FrontHeader = () => {
  return (
    <div>
      <ul className="nav justify-content-center">
        {pages.map((page, i) => (
          <li key={i + 1} className="nav-item">
            {/* Nextjs uses href attribute instead of "to" and an anchor tag */}
            {/* Change the navbar to suit your needs */}
            <Link href={page.link}>
              <a className="nav-link text-inherit">{page.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FrontHeader;
