import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import Layout from "../Layout/Layout";
import styles from "../../styles/Navigation.module.css";
import { Menu, MenuItem } from "@mui/material";

export default function Navigation() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
              <IconButton
                size="large"
                edge="start"
                color="secondary"
                aria-label="menu"
                sx={{ mr: 2, color: "#fff" }}
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <MenuIcon />
              </IconButton>

              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>
                  <Link href="/">Home</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link href="/about">About</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link href="/contact">Contact</Link>
                </MenuItem>
              </Menu>
            </div>
          </div>
        </Layout>
      </div>
    </nav>
  );
}
