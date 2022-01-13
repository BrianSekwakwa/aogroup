import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Layout from "../Layout/Layout";
import styles from "../../styles/Navigation.module.css";

export default function Navigation() {
  return (
    <Box>
      <AppBar position="fixed" className={styles.navigation}>
        <Layout>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Image src="/images/logo-2.png" width={70} height={40} />
            </Typography>
            <Button color="inherit">
              <Link href="/">Home</Link>
            </Button>
            <Button color="inherit">
              <Link href="/about">About</Link>
            </Button>
            <Button color="inherit">
              <Link href="/contact">Contact</Link>
            </Button>
          </Toolbar>
        </Layout>
      </AppBar>
    </Box>
  );
}
