import React from "react";
import { Boxes, Box } from "./Styles";

export default ({
    children,
    backgroundBack,
    backgroundMiddle,
    backgroundFront
}) => (
    <Boxes>
        <Box color={backgroundBack} />
        <Box color={backgroundMiddle} />
        <Box image={backgroundFront}>{children}</Box>
    </Boxes>
);
