import React from "react";
import PropTypes from "prop-types";
import FrontHeader from "@/components/FrontHeader";

const Front = ({ children }) => {
  return (
    <div id="front-layout">
      <FrontHeader />
      <div className="font-body-wrapper">{children}</div>
      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
};

Front.propTypes = {
  children: PropTypes.element,
};

export default Front;
