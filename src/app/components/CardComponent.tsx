"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { makeStyles } from "@mui/styles";
import { StaticImageData } from "next/image";
import Link from "next/link";
import { Box, Button, Chip } from "@mui/material";

interface CardProps {
  id: number;
  img: string;
  name: string;
  grade_name: string;
  status:string;
  path:string
}

const useStyles = makeStyles({
  cardMediaStyles: {
    height: "100%",
  },
  cardStyles: {
    border: "1px solid rgba(255, 255, 255, 0.00)",
    maxWidth: 345,
    width: "328px",
    padding: "12px",
    height: "auto",
    boxShadow:
      "0px 2px 4px 0px rgba(0, 0, 0, 0.14), 0px 0px 2px 0px rgba(0, 0, 0, 0.12)",
    textDecoration: "none",
  },
  typoStyles: {
    fontSize: "14px",
    color: "#2F4362",
    fontWeight: 600,
    lineHeight: "20px",
    fontStyle: "normal",
    overflow: "hidden",
  },
  typoStyles2: {
    fontSize: "14px",
    color: "#2F4362",
    fontWeight: 400,
    lineHeight: "20px",
    fontStyle: "normal",
    overflow: "hidden",
  },
  cardActionAreaStyles: {
    outline: "none",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
});

const CardComponent: React.FC<CardProps> = ({
  id,
  img,
  name,
  grade_name,
  status,
  path,
}) => {
  const classes = useStyles();

  const statusMapping:Record<string,string> = {
    not_started : "Not started",
    in_progress : "In progress",
    completed : "Completed",
  }
 
  return (
    <Card className={classes.cardStyles}>
      <Link href={path} passHref legacyBehavior>
        <a
          style={{
            textDecoration: "none",
            color: "inherit",
            cursor: "pointer",
            transition: "none",
            background: "transparent",
          }}
        >
          <CardActionArea className={classes.cardActionAreaStyles}>
            <CardMedia
              component="img"
              height="140"
              image={img}
              alt={name}
              className={classes.cardMediaStyles}
            />
            <CardContent>
              <Typography gutterBottom className={classes.typoStyles}>
                {name}
              </Typography>
              <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",pt:"8px"}}>
              <Typography className={classes.typoStyles2}>
                {grade_name}
              </Typography>
              <Chip label={statusMapping[status] || status}
               sx={{fontSize:"14px",width:"auto",
                padding:"6px 16px",
                "& .MuiChip-label": { fontSize: "14px",color:"#535353",padding:"0px",fontWeight:500, } }}/>
              </Box>
            </CardContent>
              <Button variant="contained"  disableFocusRipple disableTouchRipple sx={{padding: "10px 24px",textTransform:"none",color:"#FFFFFF",fontSize:"16px",width:"100%",height:"48px",justifyContent:"center",alignSelf:"stretch"}}>Start Now</Button>
          </CardActionArea>
        </a>
      </Link>
    </Card>
  );
};
export default CardComponent;
