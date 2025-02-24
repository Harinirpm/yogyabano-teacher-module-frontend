"use client";

import * as React from "react";
import styles from "./page.module.css";
import Typography from "@mui/material/Typography";
import withLayout from "./components/withLayout";

function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Typography>Hello</Typography>
        </main>
    </div>
  );
}
export default Home;
