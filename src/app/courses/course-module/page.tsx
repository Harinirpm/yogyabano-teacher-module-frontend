"use client";
import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect, useState } from "react";
// import { courses } from "@/data/courseData";
import { Box, Container, Typography } from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import LifeSkill from "@/app/assets/lifeskill.png"
export const courses = [
  {
    id: "1",
    title: "Essential life skills",
    grade: "Grade 8",
    description: "This course equips students with vital life skills such as effective communication,decision-making, and problem-solving. Through engaging lessons and activities, learners will build confidence and resilience to tackle everyday challenges.",
    image: LifeSkill,
  },
];

const StyledBox = styled(Box)({
  backgroundColor:"#2F4362",
  height:"auto",
});

const useStyles = makeStyles({
  styledTypo:{
    color:"#FFFFFF",
    fontSize:"20px",
  },
  styledTypo2:{
    color:"#FFFFFF",
    fontSize:"16px",
    marginTop:"8px",
  },
  styledTypo3:{
    color:"#FFFFFF",
    fontSize:"14px",
    // width:"600px",
    marginTop:"32px",
    marginBottom:"28px",
  },
  imgStyle:{
    padding:"22px",
    borderRadius:"12px"

  },
  textBoxStyles:{
    display:"flex", flexDirection:"column",width:"600px",paddingTop:"40px",paddingBottom:"57px",
  }
})
const CourseModule = () => {
  const classes = useStyles();
  // const router = useRouter();
  // const { id } = router.query;
  // const [course, setCourse] = useState<{ title: string; description: string; image: string } | null>(null);

  // useEffect(() => {
  //   if (id) {
  //     const selectedCourse = courses.find((course) => course.id === id);
  //     if (selectedCourse) {
  //       setCourse(selectedCourse);
  //     }
  //   }
  // }, [id]);
  // if (!course) return <p>Loading...</p>;

  return (
    <>
    <Box>
      <StyledBox>
        {courses.map((course,id)=>(
        <Box display="flex" sx={{padding:"30px 131px"}} key={course.id}>
        <Image
        src={course.image.src}
        alt={course.title}
        height={260}
        width={260}
        style={{borderRadius:"12px"}}
        className={classes.imgStyle}
        />
        <Box className={classes.textBoxStyles}>
        <Typography className={classes.styledTypo}>{course.title}</Typography>
        <Typography className={classes.styledTypo2}>{course.grade}</Typography>
        <Typography className={classes.styledTypo3}>{course.description}</Typography>
          </Box>
          </Box>
          ))}
      </StyledBox>
      </Box>







      {/* <Typography>Course Module: {id}</Typography>
      <Typography>{course.title}</Typography>
      <Typography>{course.description}</Typography>
      <Image src={course.image} alt={course.title} width={400} height={250} /> */}
    </>
  );
};

export default CourseModule;
