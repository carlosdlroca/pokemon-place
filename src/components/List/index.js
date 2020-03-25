import React from "react";
import { List, ListItem } from "./Styles";

export default ({ items, render }) => (
    <List>
        {items.map((item, itemIndex) => render(item, itemIndex, ListItem))}
    </List>
);
