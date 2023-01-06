import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import NoteOutlinedIcon from "@mui/icons-material/NoteOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import Typography from "@mui/material/Typography";
import { nanoid } from "nanoid";

import classes from "./Sidebar.module.css";

interface Props {
  isOpen: boolean;
}

function Sidebar(props: Props) {
  const listItems = [
    ["E-Diary", <CalendarMonthOutlinedIcon />, null],
    ["Lists", <FormatListBulletedOutlinedIcon />, null],
    ["Notes", <NoteOutlinedIcon />, null],
    ["Resources", <AttachFileOutlinedIcon />, null],
    ["Contact Us", <ChatOutlinedIcon />, null],
    [
      "Terms & Conditions",
      <InsertDriveFileOutlinedIcon />,
      <OpenInNewOutlinedIcon fontSize="small" />,
    ],
    [
      "Privacy Policy",
      <LockOutlinedIcon />,
      <OpenInNewOutlinedIcon fontSize="small" />,
    ],
  ];
  function renderListItems() {
    return listItems.map((item, i) => (
      <ListItem key={nanoid(6)} disablePadding>
        <ListItemButton sx={{ paddingLeft: "24px", paddingRight: "5px" }}>
          <ListItemIcon>{item[1]}</ListItemIcon>
          <ListItemText primary={item[0]} />
          {item[2] !== null && (
            <ListItemIcon sx={{ justifySelf: "flex-end", opacity: 0.7 }}>
              {item[2]}
            </ListItemIcon>
          )}
        </ListItemButton>
      </ListItem>
    ));
  }

  return (
    <Drawer
      open={props.isOpen}
      hideBackdrop={true}
      variant="persistent"
      PaperProps={{
        sx: {
          top: "65px",
          height: "calc(100% - 65px)",
          width: "320px",
          justifyContent: "space-between",
        },
      }}
    >
      <List>{renderListItems()}</List>
      <Typography
        sx={{
          fontSize: "14px",
          opacity: 0.7,
          padding: "16px 24px",
        }}
      >
        © Copyright {new Date().getFullYear()}. CourtsAndLawyers Nigeria.
      </Typography>
    </Drawer>
  );
}

export default Sidebar;
