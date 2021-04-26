import React, { Fragment, useEffect } from "react";
import { Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";



const HomeLayout = props => {
  return (
    <Fragment>
      <Header />
      {props.children}
      <Footer />
    </Fragment>
  );
};
export default function HomeTeamplate({ Component, ...props }) {

  return (
    <Fragment>
      <Route
        {...props}
        render={propsCompnent => (
          <HomeLayout>
            <Component propsCompnent={{ ...propsCompnent }} />
          </HomeLayout>
        )}
      />
    </Fragment>
  );
}
