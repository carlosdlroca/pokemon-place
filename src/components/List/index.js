import React from "react";
import { List, ListItem } from "./Styles";

export default ({ itemsArr, render }) => (
    <List>{itemsArr.map(item => render(item, ListItem))}</List>
);
