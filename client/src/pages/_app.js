import React, { Fragment } from "react";
import "../styles/scss/index.scss";
import PropTypes from "prop-types";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Football App</title>
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.element,
  pageProps: PropTypes.any,
};

export default MyApp;
