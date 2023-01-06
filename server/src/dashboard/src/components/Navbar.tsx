import { MouseEvent, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import Logout from "@mui/icons-material/Logout";
import Settings from "@mui/icons-material/Settings";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

import classes from "./Navbar.module.css";

interface Props {
  menuHandler: () => void;
}

function Navbar(props: Props) {
  const [profileMenuAnchor, setProfileMenuAnchor] =
    useState<null | HTMLElement>(null);

  function openProfileMenu(e: MouseEvent<HTMLElement>) {
    setProfileMenuAnchor(e.currentTarget);
  }

  function closeProfileMenu() {
    setProfileMenuAnchor(null);
  }

  return (
    <AppBar
      color="transparent"
      sx={{ boxShadow: "none", borderBottom: "1px solid rgba(0, 0, 0, 0.12)" }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="The Dashboard Menu"
          sx={{ mr: 1 }}
          onClick={props.menuHandler}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: "flex" }}
        >
          CourtAndLawyers
          <span className={classes.symbol}>NG</span>
        </Typography>
        <IconButton
          size="small"
          sx={{ ml: 2 }}
          aria-controls="profile-menu"
          aria-haspopup="true"
          aria-expanded="false"
          onClick={openProfileMenu}
        >
          <Avatar
            sx={{
              width: 32,
              height: 32,
              bgcolor: "#9D3C72",
              textTransform: "uppercase",
            }}
          >
            m
          </Avatar>
        </IconButton>
        <Menu
          anchorEl={profileMenuAnchor}
          open={Boolean(profileMenuAnchor)}
          onClose={closeProfileMenu}
          id="profile-menu"
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.10))",
              mt: 0.8,
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem>
            <ListItemIcon>
              <PersonOutlineIcon fontSize="large" />
            </ListItemIcon>
            <div className={classes.user}>
              <Typography
                variant="inherit"
                noWrap
                sx={{ display: "flex", flexDirection: "column", ml: 1 }}
              >
                <span>Laurem Ipsum</span>
                <span className={classes.email}>lauremipsum@gmail.com</span>
              </Typography>
            </div>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
