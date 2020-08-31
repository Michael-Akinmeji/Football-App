import React, { Fragment } from "react";
import "../styles/globals.css";
import "../styles/scss/index.scss";
import PropTypes from "prop-types";
import Head from "next/head";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
    <Head>
        <title>Football App</title>
        <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
        ></link>
    </Head>
    <Component {...pageProps} />
    </Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};

export default MyApp;
