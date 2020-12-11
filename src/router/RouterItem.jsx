import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavbarItem from "../components/homepage/NavbarItem.jsx";
import MainItem from "../components/homepage/MainItem.jsx";
import FooterItem from "../components/homepage/FooterItem.jsx";
import FormItem from "../components/form/FormItem.jsx";
import ShowInfo from "../components/showinfo/ShowInfo.jsx";

const RouterItem = () => {
  return (
    <>
      <Router>
        <NavbarItem />
        <Switch>
          <Route exact path="/">
            <MainItem />
          </Route>
          <Route exact path="/form">
            <FormItem />
          </Route>
          <Route exact path="/form/:alamatAsal/:alamatTujuan/:berat">
            <ShowInfo />
          </Route>
        </Switch>
        <FooterItem />
      </Router>
    </>
  );
};

export default RouterItem;
