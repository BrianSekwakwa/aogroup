import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Drawer, List, ListItem, ListItemText } from "@mui/material";

import Layout from "../Layout/Layout";
import styles from "../../styles/Navigation.module.css";

type Anchor = "left";

export default function Navigation() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link href="/">
          <ListItem button>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
        <Link href="/about">
          <ListItem button>
            <ListItemText primary="About" />
          </ListItem>
        </Link>
        <Link href="/contact">
          <ListItem button>
            <ListItemText primary="Contact" />
          </ListItem>
        </Link>
      </List>
    </Box>
  );

  return (
    <nav>
      <div className={styles.navigation}>
        <Layout>
          <div className={styles.navigationBar}>
            <span className={styles.navigationLogo}>
              <Image
                src="/images/logo-2.png"
                width={70}
                height={40}
                alt="company logo"
              />
            </span>
            <ul className={styles.navigationLinks}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
            <div className={styles.navigationMenuIcon}>
              {(["left"] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                  <IconButton
                    size="large"
                    edge="start"
                    color="secondary"
                    aria-label="menu"
                    sx={{ mr: 2, color: "#fff" }}
                    onClick={toggleDrawer(anchor, true)}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                  >
                    {list(anchor)}
                  </Drawer>
                </React.Fragment>
              ))}
            </div>
          </div>
        </Layout>
      </div>
    </nav>
  );
}
