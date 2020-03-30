import React from "react";
import { NoMatch } from "./Styles";
import { Link } from "react-router-dom";
import ShakingBoxes from "../components/ShakingBoxes";

export default () => (
    <NoMatch>
        <ShakingBoxes
            backgroundFront='/missingNo.png'
            backgroundMiddle='red'
            backgroundBack='black'
            size={250}
        >
            <Link to='/pokemon'>Go Back!</Link>
        </ShakingBoxes>
    </NoMatch>
);
