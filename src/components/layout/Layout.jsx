import React, { useEffect, useState } from "react";
import "./layout.scss";

import { Helmet } from "react-helmet";

// components
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>

      <Navbar />
      <main className="layoutBlock">{children}</main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Welcome to Ecommerce",
  description: "We sell the best products for cheap",
  keywords: "electronics, buy electronics, cheap electroincs",
  author: "Frenzy Shop",
};

export default Layout;
