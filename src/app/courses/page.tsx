"use client";
import CardComponent from '@/app/components/CardComponent';
import FilterComponent from '@/app/components/FilterComponent';
import Searchbar from '@/app/components/Searchbar';
import { Container, Typography,} from '@mui/material'
import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import { makeStyles } from "@mui/styles";
import Lifeskill from "@/app/assets/lifeskill.png";
import Communication from "@/app/assets/communication.png";
import Problem from "@/app/assets/problem.png";
import { StaticImageData } from 'next/image';

interface Cards {
  id:number,
  image: StaticImageData,
  title: string,
  description: string,
  path:string,
}

const CardItems : Cards[] = [
  {
    id:1,
    image : Lifeskill,
    title :  "Essential life skills",
    description : "Grade 8",
    path:"/teachermodule/courses/course-module",
  },
  {
    id:2,
    image : Communication,
    title :  "Communication Skills",
    description : "Grade 9",
    path: "/teachermodule/courses/course-module",
  },
  {
    id:3,
    image : Problem,
    title :  "Problem Solving",
    description : "Grade 3",
    path: "/teachermodule/courses/course-module",
  },
];

const StyledContainer = styled(Container)({
 marginLeft:"62px",
 marginTop:"40px",
});

const StyledTypography = styled(Typography)({
  fontSize:"20px",
  color:"#2F4362",
  fontWeight:600,
  marginTop:"36px",
  marginBottom:"30px",
})



const useStyles = makeStyles({
gridStyles:{
  "&.MuiGrid2-root":{
    rowSpacing:"18px",
    columnSpacing:"24px",
  },

},
});
const Courses = () => {
  const classes = useStyles();

  return (
    <StyledContainer>
      <Box sx={{display:"flex", gap:"520px",alignItems:"center"}}>
      <Searchbar />
      <FilterComponent />
      </Box>
      <StyledTypography>Available Courses for Teaching</StyledTypography>

      <Box sx={{ flexGrow: 1 }}>
      <Grid container rowSpacing="24px" columnSpacing="18px" spacing={{ xs: 1, md: 2.4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {CardItems.map((card,id) => (
          <Grid key={card.id} size={{ xs: 2, sm: 4, md: 4 }}>
            <CardComponent {...card} />
          </Grid>
        ))}
      </Grid>
    </Box>
      
    </StyledContainer>
  )
}
export default Courses;
