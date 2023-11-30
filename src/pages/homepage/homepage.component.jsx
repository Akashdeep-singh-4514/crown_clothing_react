import React from "react";

import Directory from "../../components/directory/directory.component";

import "./homepage.styles.scss";
import Header from "../../components/header/header.component";

const HomePage = () => (
  <>
    <Header />
    <div className="homepage">
      <Directory />
    </div>
  </>
);

export default HomePage;
