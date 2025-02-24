"use client";

import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import GridViewIcon from "@mui/icons-material/GridView";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import Yogyabano from "@/app/assets/Yogyabano";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import styled from "styled-components";
import Courses from "@/app/assets/Courses";
import theme from "../theme";
import { Divider } from "@mui/material";
import { Logout } from "@mui/icons-material";
import Leftclose from "../assets/Leftclose";
import { makeStyles } from "@mui/styles";
import { usePathname } from "next/navigation";
import Link from "next/link";
interface Props {
  window?: () => Window;
}

interface SidebarItems {
  icon: React.ReactElement;
  name: string;
  path: string;
  subItems?: SidebarItems[];
}

interface SidebarProps {
  topItems: SidebarItems[];
  bottomItems: SidebarItems[];
  onItemClick: (item: SidebarItems) => void;
}
const drawerWidth = 290;

const StyledTypography = styled(Typography)<{ fontSize?: string }>(
  ({ fontSize }) => ({
    fontSize: fontSize || "14px",
    fontWeight: 500,
    alignSelf: "stretch",
    color: "#4F6D7A",
    width: "100%",
    marginTop: "8px",
    marginBottom: "40px",
  })
);

const DrawerStyled = styled(Drawer)({
  width: 240,
  flexShrink: 0,
  display: "flex",
  justifyContent: "center",
  "& .MuiDrawer-paper": {
    width: 276,
  },
});

const StyledContainer = styled(Container)({
  marginTop: "40px",
  padding: "0px 0px",
  "&.MuiContainer-root": {
    paddingRight: "14px",
    paddingLeft: "14px",
  },
});

const StyledList = styled(List)({
  backgroundColor: theme.palette.common.white,
  width: "236px",
  marginLeft: "8px",
});

const StyledListItem = styled(ListItem)<{ active: boolean }>(({ active }) => ({
  backgroundColor: active?  "#FFEAD9" : "inherit",
  width: "236px",
  marginLeft: "8px",
  color: active ? "#FF7500" : "inherit",
  marginBottom: "8px",
  "& .MuiListItemIcon-root": {
    color: active ? "#FF7500" : "inherit",
  },
}));

const StyledListItemButton = styled(ListItemButton)<{ active: boolean }>(({ active }) => ({
  backgroundColor: active?  "#FFEAD9" : theme.palette.common.white,
  display: "flex",
  alignItems: "center",
  height: "40px",
  gap: "8px",
  alignSelf: "stretch",
  borderRadius: "4px",
  padding: "10px",
  width: "140px",
  "&:hover": {
    backgroundColor: active?  "#FFEAD9" : theme.palette.common.white,
  },
  "&.Mui-disabled": {
    backgroundColor: theme?.palette?.common?.white || "#fff",
    opacity: 1,
  },
}));

const StyledListItemIcon = styled(ListItemIcon) <{ active: boolean }>(
  ({ active }) => ({
    color: active ? "#FF7500" : "#4F6D7A",
  "&.MuiListItemIcon-root": {
    minWidth: "0px",
    color: active ? "#FF7500" : "#4F6D7A",
  },
}));

const StyledStack = styled(Stack)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "648px",
});

const StyledListItemText = styled(ListItemText)<{ active: boolean }>(
  ({ active }) => ({
  fontSize: "16px",
  fontWeight: 600,
  alignSelf: "stretch",
  color: active ? "#FF7500" : "#4F6D7A",
  width: "100%",
  lineHeight: "normal",
  "&.MuiListItemText-root": {
    marginTop: "0px",
    marginBottom: "0px",
  },
}));

const StyledDivider = styled(Divider)({
  marginBottom: "20px",
  marginLeft: "8px",
  minWidth: "100px",
  width: "260px",
});

//icon styles
const useStyles = makeStyles(() => ({
  iconStyle: {
    color: "#4F6D7A",
    height: "24px",
    width: "24px",
  },
}));


const Sidebar: React.FC<SidebarProps> = ({
  topItems,
  bottomItems,
  onItemClick,
}) => {
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState<string>("");

  useEffect(() => {
    setActiveItem(pathname);
  }, [pathname]);

  const handleItemClick = (item: SidebarItems) => {
    setActiveItem(item.path);
    onItemClick(item);
  };

  return (
    <>
    <DrawerStyled variant="permanent">
    <StyledContainer>
      <Yogyabano />
      <StyledTypography>
        The AI First Engagement Platform for Educational Institutions
      </StyledTypography>
    </StyledContainer>

    <StyledStack>
      <StyledList>
        {topItems.map((item, index) => {
           const isActive = pathname.startsWith(item.path) || activeItem.startsWith(item.path);

          return (
            <React.Fragment key={index}>
              <Link href={item.path} passHref>
                <StyledListItem disablePadding active={isActive} onClick={() => handleItemClick(item)}>
                  <StyledListItemButton disableRipple active={isActive}>
                    <StyledListItemIcon active={isActive}>
                      {item.icon}
                    </StyledListItemIcon>
                    <StyledListItemText active={isActive}>
                      {item.name}
                    </StyledListItemText>
                  </StyledListItemButton>
                </StyledListItem>
              </Link>
            </React.Fragment>
          );
        })}
      </StyledList>

      <StyledList>
        <StyledDivider />
        {bottomItems.map((item, index) => {
          const isActive =
            pathname.startsWith(item.path) || activeItem.startsWith(item.path);

          return (
            <React.Fragment key={index}>
              <Link href={item.path} passHref>
                <StyledListItem disablePadding active={isActive} onClick={() => handleItemClick(item)}>
                  <StyledListItemButton disableRipple active={isActive}>
                    <StyledListItemIcon active={isActive}>
                      {item.icon}
                    </StyledListItemIcon>
                    <StyledListItemText active={isActive}>
                      {item.name}
                    </StyledListItemText>
                  </StyledListItemButton>
                </StyledListItem>
              </Link>
            </React.Fragment>
          );
        })}
      </StyledList>
    </StyledStack>
  </DrawerStyled>
  </>
);
};
 
export default Sidebar;
