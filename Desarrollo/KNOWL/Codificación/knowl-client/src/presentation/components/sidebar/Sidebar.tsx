import React, { MouseEvent } from "react";
import Drawer from "@material-ui/core/Drawer";
import clsx from "clsx";
import * as icons from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { sidebarStyles } from "./sidebar.styles";
import { sidebarItems } from "./sidebar.data";
import { useHistory } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = React.useState(true);
  const history = useHistory();
  const handleSidebarItemChange = (e: MouseEvent, sidebarItem: string) => {
    e.preventDefault();
    history.push(sidebarItem);
  };
  const classes = sidebarStyles();

  return (
    <div>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={() => setOpen(!open)}>
            <ChevronLeftIcon />
          </IconButton>
        </div>

        <List>
          {sidebarItems.map((item, index) => {
            const Icon = icons[item.icon];
            return (
              <>
                <ListItem
                  key={index}
                  button
                  onClick={(e) => handleSidebarItemChange(e, item.route)}
                >
                  <ListItemIcon>
                    <Icon />
                  </ListItemIcon>
                  <ListItemText primary={item.sidebarItem} />
                </ListItem>
                {index === 0 && <Divider />}
              </>
            );
          })}
        </List>
      </Drawer>
    </div>
  );
};

export default Sidebar;
