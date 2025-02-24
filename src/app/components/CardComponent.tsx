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

interface CardProps {
  id: number;
  image: StaticImageData;
  title: string;
  description: string;
  path: string;
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
    height: "268px",
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
  image,
  title,
  description,
  path,
}) => {
  const classes = useStyles();
  const imageUrl = typeof image === "string" ? image : image.src;
  return (
    <Card className={classes.cardStyles}>
      <Link
        href={"/courses/course-module"}
        passHref
        legacyBehavior
      >
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
              image={imageUrl}
              alt={title}
              className={classes.cardMediaStyles}
            />
            <CardContent>
              <Typography gutterBottom className={classes.typoStyles}>
                {title}
              </Typography>
              <Typography className={classes.typoStyles2}>
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </a>
      </Link>
    </Card>
  );
};
export default CardComponent;
