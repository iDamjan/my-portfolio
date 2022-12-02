import { useState, Fragment } from "react";
import classes from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { useLocation } from "react-router-dom";
import { IconButton, List, ListItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const pages = [
  { label: "Home", path: "/home" },
  { label: "About", path: "/about" },
  { label: "Skills", path: "/skills" },
  { label: "Projects", path: "/projects" },
];

export const MobileDrawer = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { pathname } = location;

  const drawer = (
    <>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <CloseIcon
          sx={{ margin: "15px", fill: "white" }}
          onClick={() => setMobileOpen(!mobileOpen)}
        />
      </div>
      <Box
        onClick={() => setMobileOpen(!mobileOpen)}
        sx={{ textAlign: "center" }}
        style={{ display: "grid", justifyContent: "center" }}
      >
        <List>
          {pages.map((page, index) => (
            <ListItem
              key={page.label}
              disablePadding
              sx={{ textAlign: "center" }}
            >
              <Link
                to={page.path}
                key={index}
                className={
                  pathname === page.path ? classes.active : classes.link
                }
                style={{ width: "100%" }}
              >
                {page.label}
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
  return (
    <div className={classes.mobileContainer}>
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "flex", md: "none" },
          justifyContent: "flex-end",
        }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => setMobileOpen(!mobileOpen)}
          edge="start"
        >
          <MenuIcon sx={{ fill: "white" }} />
        </IconButton>
      </Box>
      <Fragment key="right">
        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={() => setMobileOpen(!mobileOpen)}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "flex", sm: "flex" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 240,
              backgroundColor: "#191919",
              borderLeft: "3px solid #fa163f",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Fragment>
    </div>
  );
};
