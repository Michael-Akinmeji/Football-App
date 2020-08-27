import React from "react";
import PropTypes from "prop-types";
import FrontHeader from "@/components/FrontHeader";
import Footer from "@/components/Footer";

const Front = ({ activePage, children }) => {
  return (
    <div id="front-layout">
        <FrontHeader activePage={activePage} />
        <div className="view-wrapper">
            {children}
        </div>
        <Footer />
    </div>
  );
};

Front.propTypes = {
  activePage: PropTypes.string,
  children: PropTypes.element,
};

export default Front;
