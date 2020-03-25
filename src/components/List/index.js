import React from "react";
import { List, ListItem } from "./Styles";

export default ({ items, renderListItemChildren }) => (
    <List>
        {items.map((item, itemIndex) => (
            <ListItem key={itemIndex}>
                {renderListItemChildren(item, itemIndex)}
            </ListItem>
        ))}
    </List>
);
