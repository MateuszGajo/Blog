import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const ListItems = props => {
  return (
    <List>
      <ListItem>
        <ListItemText primary={props.item} />
      </ListItem>
    </List>
  );
};

export default ListItems;
