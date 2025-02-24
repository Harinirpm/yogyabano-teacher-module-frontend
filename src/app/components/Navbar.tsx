import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import {
  ArrowBackIosNew,
} from "@mui/icons-material";
import { JSX } from "@emotion/react/jsx-runtime";

interface ActiveItem {
  icon: JSX.Element;
  name: string;
  path: string;
  subItems?: ActiveItem[];
}

interface NavbarProps {
  activeItem: ActiveItem;
}
const Navbar: React.FC<NavbarProps> = ({ activeItem }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const router = useRouter();

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleBackClick = () => {
    router.push("/courses");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (anchorEl && !anchorEl.contains(event.target as Node)) {
        handleClose();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [anchorEl]);

  return (
    <AppBar
      position="sticky"//static
      color="transparent"
      elevation={0}
      sx={{ borderBottom: "1px solid #B9C5CA", zIndex: 1100,top: 0,  backgroundColor: "white",  }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          {activeItem.path.startsWith("/courses/course-module") && (
            <IconButton color="inherit" onClick={handleBackClick}>
              <ArrowBackIosNew />
            </IconButton>
          )}
          {activeItem.icon}
          <Typography variant="h6" sx={{ flexGrow: 1, marginLeft: 2 }}>
            {activeItem.name}
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;