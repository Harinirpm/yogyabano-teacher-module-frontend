"use client";
import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import WithAuth from "@/app/components/WithAuth"

const Dashboard = () => {
  // const [count, setCount] = useState<number | null>(1)
  // useEffect(() => {
  //   setCount((prev) => prev + 1);
  // }, []);

  return (
    <div>
      <Typography>Dashboard..</Typography>
    </div>
  )
}

export default WithAuth(Dashboard);
