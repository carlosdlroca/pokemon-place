import React from "react";
import { NoMatch } from "./Styles";
import ShakingBoxes from "../components/ShakingBoxes";

export default () => (
    <NoMatch>
        <ShakingBoxes
            backgroundFront='/missingNo.png'
            backgroundMiddle='red'
            backgroundBack='black'
            size={250}
        >
            Go Back!
        </ShakingBoxes>
    </NoMatch>
);
