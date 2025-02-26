"use client";
import CardComponent from "@/app/components/CardComponent";
import FilterComponent from "@/app/components/FilterComponent";
import Searchbar from "@/app/components/Searchbar";
import { Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { makeStyles } from "@mui/styles";
import Lifeskill from "@/app/assets/lifeskill.png";
import Communication from "@/app/assets/communication.png";
import Problem from "@/app/assets/problem.png";
import { StaticImageData } from "next/image";
import WithAuth from "@/app/components/WithAuth";
import {getRequest} from "@/app/utils/apiUtils"

interface Course {
  id: number;
  image: StaticImageData; //StaticImageData
  title: string;
  description: string;
}

// const CardItems: Course[] = [
//   {
//     id: 1,
//     image: Lifeskill,
//     title: "Essential life skills",
//     description: "Grade 8",
//   },
//   {
//     id: 2,
//     image: Communication,
//     title: "Communication Skills",
//     description: "Grade 9",
//   },
//   {
//     id: 3,
//     image: Problem,
//     title: "Problem Solving",
//     description: "Grade 3",
//   },
// ];

const StyledContainer = styled(Container)({
  marginLeft: "62px",
  marginTop: "40px",
});

const StyledTypography = styled(Typography)({
  fontSize: "20px",
  color: "#2F4362",
  fontWeight: 600,
  marginTop: "36px",
  marginBottom: "30px",
});

const useStyles = makeStyles({
  gridStyles: {
    "&.MuiGrid2-root": {
      rowSpacing: "18px",
      columnSpacing: "24px",
    },
  },
});


const Courses = () => {
  const classes = useStyles();
  const [courses,setCourses] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGrade, setSelectedGrade] = useState<string | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

  useEffect(()=>{
    const fetchCourses = async () => {
      try{
        const response = await getRequest("/backend/getAllCourses/1");
        console.log("courses", response.data)
        setCourses(response.data.courses);
      }
      catch(error){
        console.error("Error fetching data",error);
      }
    };
    fetchCourses();
  },[]);

  // const filteredCourses = courses.filter((course) => {
  //   const matchSearch = searchTerm? course.name.toLowerCase().includes(searchTerm.toLowerCase()):true;
  //   const matchGrade = selectedGrade?course.grade_name === selectedGrade : true;
  //   const matchStatus = selectedStatus?course.status === selectedStatus:true;
  //   return matchSearch && matchGrade && matchStatus;
  // });

  const filteredCourses = searchTerm
  ? courses.filter((course) => 
      course.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  : courses;
  return (
    <StyledContainer>
      <Box sx={{ display: "flex", gap: "520px", alignItems: "center" }}>
      <Searchbar onSearch={(term) => setSearchTerm(term)} />
        <FilterComponent 
        />
      </Box>
      <StyledTypography>Available Courses for Teaching</StyledTypography>

      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          rowSpacing="24px"
          columnSpacing="18px"
          spacing={{ xs: 1, md: 2.4 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
            {filteredCourses?.length > 0 ? (
          filteredCourses.map((card) => (
            <Grid key={card.course_id} size={{ xs: 2, sm: 4, md: 4 }}>
              <CardComponent {...card} path={`/courses/course-module/1`} />
            </Grid>
          ))
        ) : (
          <Typography>No courses found.</Typography>
        )}
        </Grid>
      </Box>
    </StyledContainer>
  );
};
export default WithAuth(Courses);
