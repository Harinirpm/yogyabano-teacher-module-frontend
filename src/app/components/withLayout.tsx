"use client";

import { useState, useEffect, ReactNode } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";
// import Navbar from "../components/Navbar";
import {
  GridView,
  Logout,
  Dvr,
} from "@mui/icons-material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Leftclose from "../assets/Leftclose";
import { JSX } from "@emotion/react/jsx-runtime";
import Navbar from "./Navbar";

interface ActiveItem {
  icon: JSX.Element;
  name: string;
  path: string;
  subItems?: ActiveItem[];
}

const defaultIcon: ActiveItem = {
  icon: <GridView />,
  name: "Dashboard",
  path: "/dashboard",
};

const topItems: ActiveItem[] = [
  { icon: <GridView />,
     name: "Dashboard", 
     path: "/dashboard" 
    },
  {
    icon: <Dvr />,
    name: "Courses",
    path: "/courses",
    subItems:[
      {
        icon : <></>,
        name : "Back to Courses",
        path:"/courses/course-module"
      },
    ],
  },
];

const bottomItems: ActiveItem[] = [
  { 
    icon: <Logout />, 
    name: "Logout",
     path: "/pages/login" 
    },
  { 
    icon: <Leftclose />,
     name: "", 
     path: "/"
     },
];
type WithLayoutProps = {
    children: ReactNode;
  };

  
  const withLayout = <P extends object>(Component: React.ComponentType<P>) => {
    const WrappedComponent = (props: P) => {
    const pathname = usePathname();
    const [activeItem, setActiveItem] = useState<ActiveItem>(defaultIcon);

    useEffect(() => {
      const allItems = [...topItems, ...bottomItems];
      const findActiveItem = (items: ActiveItem[]): ActiveItem | undefined => {
        for (const item of items) {
          if (item.path === pathname) {
            return item;
          }
          if (item.subItems) {
            const subItem = findActiveItem(item.subItems);
            if (subItem) {
              return subItem;
            }
          }
        }
        return undefined;
      };
      const currentItem = findActiveItem(allItems) || defaultIcon;
      setActiveItem(currentItem);
    }, [pathname]);

    const handleSidebarItemClick = (item: ActiveItem) => {
      setActiveItem(item);
    };

    return (
      <div style={{ display: "flex", height: "100vh" }}>
        <div style={{ width: "276px", height: "100%" }}>
          <Sidebar
            topItems={topItems}
            bottomItems={bottomItems}
            onItemClick={handleSidebarItemClick}
          />
        </div>
        <div style={{ flexGrow: 1, height: "100%" }}>
          <Navbar activeItem={activeItem} />
          <Component {...props} />
        </div>
      </div>
    );
  };

  WrappedComponent.displayName = `withLayout(${
    Component.displayName || Component.name || "Component"
  })`;

  return WrappedComponent;
};

export default withLayout;
