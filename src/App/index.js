import React from "react";
import Router from "./Router";
import BaseStyle from "./Styles/BaseStyle";
import Normalize from "./Styles/Normalize";

export default () => (
    <React.Fragment>
        <BaseStyle />
        <Normalize />
        <Router />
    </React.Fragment>
);
