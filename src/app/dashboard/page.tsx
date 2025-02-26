"use client";

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import { courses } from "@/data/courseData";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import BurstModeOutlinedIcon from "@mui/icons-material/BurstModeOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import { Box, Button, Grid2, Typography } from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import withAuth from "../components/WithAuth";
import { Gauge, BarChart, AxisConfig, ChartsXAxisProps } from "@mui/x-charts";
import { getRequest } from "../utils/apiUtils";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import DvrIcon from "@mui/icons-material/Dvr";
import Assessment from "@/app/assets/Assesment";
import GroupsIcon from "@mui/icons-material/Groups";
import CardComponent from "../components/CardComponent";
const Container = styled(Box)({
  display: "flex",
  flexDirection: "row",
  gap: "24px",
  margin: "24px 0 24px 24px",
});

const rows = [
  { lessonplan: "Exploring Life Skills", progress: 80 },
  { lessonplan: "Internalizing Life Skills", progress: 60 },
  { lessonplan: "Critical Thinking", progress: 60 },
  { lessonplan: "Communication Skills", progress: 50 },
  { lessonplan: "Leadership Skills", progress: 70 },
  { lessonplan: "Problem-Solving", progress: 65 },
];

const StyledContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "260px",
  height: "110px",
  padding: "18px",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "24px",
  flexShrink: 0,
  borderRadius: "16px",
  border: "2px solid #F2F3F5",
  background: "#FFF",
}));

const StyledTotalUsers = styled(Typography)(({ theme }) => ({
  color: "#64748B",
  fontFamily: "Montserrat",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "16px", // 100%
}));

const StyledTotalUsersValue = styled(Typography)(({ theme }) => ({
  color: "#2F4362",
  fontFamily: "Montserrat",
  fontSize: "40px",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "30px",
  // marginLeft: "18px",
}));

const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  // justifyContent: "center",
  flexDirection: "column",
  alignItems: "flex-start",
  alignSelf: "stretch",
  borderRadius: "18px",
  border: "2px solid #F2F3F5",
  background: "#FFF",
  marginLeft: "24px",
}));

const StyledTrainingCompletionRate = styled(Typography)(({ theme }) => ({
  color: "#2F4362",
  fontFamily: "Montserrat",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "24px", // 155.556%
  padding: 20,
}));

const InnerText = styled(Typography)(({ theme }) => ({
  color: "#FF7500",
  textAlign: "center",
  fontFamily: "Montserrat",
  fontSize: "40px",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "30px", // 75%
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
}));

const StyledDurationMonth = styled(Button)({
  fontSize: "12px",
  fontWeight: 500,
  lineHeight: "20px",
  textTransform: "none",
  color: "#64748B",
  "&.MuiButton-root": {
    "&:hover": {
      backgroundColor: "white",
    },
  },
});

const StyledDurationWeek = styled(Button)({
  fontSize: "12px",
  fontWeight: 600,
  lineHeight: "20px",
  color: "#FF7500",
  textTransform: "none",
  "&.MuiButton-root": {
    "&:hover": {
      backgroundColor: "white",
    },
  },
});

const StyledPerformanceDurationProgress = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "280px",
});

const StyledPerformanceWrapper = styled(Box)({
  marginTop: "24px",
  display: "flex",
});

const StyledDurationWrapper = styled(Box)({
  display: "flex",
  padding: "20px",
});

const StyledBox = styled(Box)({
  backgroundColor: "#2F4362",
  height: "auto",
  marginBottom: "32px",
});

const StyledTableWrapper = styled(Box)({
  maxHeight: 230,
  overflowY: "auto",
  justifyContent: "normal",
  scrollbarWidth: "none",
});

const ProgressWrapper = styled(Box)({
  width: 240,
  height: 8,
  bgcolor: "#f0f0f0",
  pr: "16px",
  borderRadius: 5,
});

const StyledExpandButton = styled(Button)({
  color: "#2F436280",
  textTransform: "none",
  padding: "24px 16px",
  fontSize: "12px",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  "&.MuiButton-root": {
    "&:hover": {
      backgroundColor: "white",
    },
  },
});

const StyledRecentCourseWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "760px",
  padding: "24px 20px",
});

const ViewButtonWrapper = styled(Box)({
  borderTop: "1px solid #EAECF0",
});

const StyledReacentCourseHeader = styled(Typography)({
  color: "#2F4362",
  fontSize: "18px",
  fontWeight: 600,
  lineHeight: "28px",
});
const useStyles = makeStyles({
  styledTypo: {
    color: "#FFFFFF",
    fontSize: "20px",
  },
  styledTypo2: {
    color: "#FFFFFF",
    fontSize: "16px",
    marginTop: "8px",
  },
  styledTypo3: {
    color: "#FFFFFF",
    fontSize: "14px",
    // width:"600px",
    marginTop: "32px",
    marginBottom: "28px",
  },
  imgStyle: {
    margin: "22px",
    borderRadius: "12px",
  },
  textBoxStyles: {
    display: "flex",
    flexDirection: "column",
    width: "760px",
    paddingTop: "40px",
  },
  tableBox: {
    border: "1px solid #ebebeb",
    borderRadius: "8px",
    ml: "20px",
    mr: "20px",
    mt: "32px",
    // width:"760px"
  },
  tablefirstcellhead: {
    color: "#64748B",
    fontSize: "12px",
    fontWeight: 600,
    gap: "8px",
    lineHeight: "18px",
    padding: "24px 12px",
  },

  markAsTaught: {
    pr: "1px",
    width: "140px",
    color: "#2F4362CC",
    fontSize: "10px",
    fontWeight: 500,
    // lineHeight: "18px",
  },
  lessonPlans: {
    color: "#2F4362CC",
    fontSize: "12px",
    fontWeight: 500,
    lineHeight: "18px",
    padding: "16px 24px",
  },
  progress: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "10px",
    fontSize: "14px",
    fontWeight: "600",
    lineHeight: "18px",
    padding: "17.5px 20px",
    color: "#344054",
  },
  tableContainer: {
    maxHeight: "400px",
    overflow: "auto",
    justifyContent: "normal",
  },
  tblHead: {
    position: "sticky",
    top: 0,
    zIndex: 2,
    backgroundColor: "#FCFCFD",
  },
  viewAllCourses: {
    color: "#2F436280",
    textTransform: "none",
    fontSize: "12px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    "&:hover": {
      backgroundColor: "white",
    },
  },
  styledArrow:{
    fontSize: "24px", color: "#2F436280" 
  },

});
//Dashboard function starts here

const Dashboard: React.FC = () => {
  interface RegionData {
    city: string;
    count: number;
  }

  const [data, setData] = React.useState<{
    totalSchools: number;
    totalTeachers: number;
    totalCourses: number;
    totalStudents: number;
    trainingCompletionRate: number;
    regionData: RegionData[];
  }>({
    totalSchools: 0,
    totalTeachers: 0,
    totalCourses: 0,
    totalStudents: 0,
    trainingCompletionRate: 0,
    regionData: [],
  });
  const classes = useStyles();
  const [visibleRows, setVisibleRows] = React.useState(3);
  const [courses, setCourses] = React.useState<any[]>([]);
  const [expanded, setExpanded] = React.useState(false);

  const handleViewAll = () => {
    setVisibleRows(rows.length);
  };

  React.useEffect(() => {
    const sessionUser = "true";
    if (!sessionUser) {
      throw new Error("User session not found");
    }
    const user = JSON.parse(sessionUser);
    const fetchData = async () => {
      try {
        const response = await getRequest(
          `/backend/dashboard/${user.user.user_metadata.companyId}`
        );
        const {
          total_schools,
          total_teachers,
          total_courses,
          total_students,
          training_completion_rate,
          region_wise_users,
        } = response.data;
        const regionData = region_wise_users.map(
          (item: { city: any; count: any }) => ({
            city: item.city,
            count: item.count,
          })
        );
        setData({
          totalSchools: total_schools,
          totalTeachers: total_teachers,
          totalCourses: total_courses,
          totalStudents: total_students,
          trainingCompletionRate: training_completion_rate,
          regionData,
        });
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };
    fetchData();
  }, []);

  //card component fetching data for displaying newly updated courses
  React.useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await getRequest("/backend/getAllCourses/1");
        console.log("courses", response.data);
        setCourses(response.data.courses);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchCourses();
  }, []);

  return (
    <>
      <Box display="flex">
        <Box>
          <Container>
            <StyledContainer>
              <StyledTotalUsers>Total Courses</StyledTotalUsers>
              <Box display="flex">
                {/* <AccountBalanceIcon style={{ fontSize: 35, color: "#FF7500" }} />  */}
                <StyledTotalUsersValue>
                  {data.totalSchools}
                </StyledTotalUsersValue>
              </Box>
            </StyledContainer>
            <StyledContainer>
              <StyledTotalUsers>Completed Courses</StyledTotalUsers>
              <Box display="flex">
                {/* <PeopleAltIcon style={{ fontSize: 35, color: "#FF7500" }} />  */}
                <StyledTotalUsersValue>
                  {data.totalTeachers}
                </StyledTotalUsersValue>
              </Box>
            </StyledContainer>
            <StyledContainer>
              <StyledTotalUsers>In Progress</StyledTotalUsers>
              <Box display="flex">
                {/* <DvrIcon style={{ fontSize: 35, color: "#FF7500" }} />  */}
                <StyledTotalUsersValue>
                  {data.totalCourses}
                </StyledTotalUsersValue>
              </Box>
            </StyledContainer>
            <StyledContainer>
              <StyledTotalUsers>Not Started</StyledTotalUsers>
              <Box display="flex">
                {/* <GroupsIcon style={{ fontSize: 35, color: "#FF7500" }} />  */}
                <StyledTotalUsersValue>
                  {data.totalStudents}
                </StyledTotalUsersValue>
              </Box>
            </StyledContainer>
          </Container>
        </Box>
      </Box>
      <StyledPerformanceWrapper>
        <Wrapper sx={{ maxWidth: 590, width: "580px", height: "auto" }}>
          <StyledPerformanceDurationProgress>
            <StyledTrainingCompletionRate variant="h6">
              Performance
            </StyledTrainingCompletionRate>
            <StyledDurationWrapper>
              <StyledDurationMonth>Monthly</StyledDurationMonth>
              <StyledDurationWeek>Weekly</StyledDurationWeek>
            </StyledDurationWrapper>
          </StyledPerformanceDurationProgress>
          <Box>
            <BarChart
              borderRadius={8}
              xAxis={[
                {
                  scaleType: "band",
                  data: data.regionData.map((item) => item.city),
                  barGapRatio: 0.1,
                  categoryGapRatio: 0.5,
                } as AxisConfig<"band", any, ChartsXAxisProps>,
              ]}
              series={[
                {
                  data: data.regionData.map((item) => item.count),
                  color: "#0557A2",
                },
              ]}
              width={590}
              height={144}
            />
          </Box>
        </Wrapper>
        <Wrapper>
          <StyledTrainingCompletionRate>
            Courses in Progress
          </StyledTrainingCompletionRate>
          <Box width={586} position="relative">
            <TableContainer className={classes.tableContainer}>
              <StyledTableWrapper>
                <Table sx={{ minWidth: 500 }} aria-label="simple table">
                  <TableHead className={classes.tblHead}>
                    <TableRow>
                      <TableCell
                        align="left"
                        className={classes.tablefirstcellhead}
                      >
                        Course Title
                      </TableCell>
                      <TableCell
                        align="left"
                        className={classes.tablefirstcellhead}
                      >
                        Progress
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.slice(0, visibleRows).map((row, index) => (
                      <TableRow
                        key={row.lessonplan}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell align="left" className={classes.lessonPlans}>
                          {index + 1} &nbsp;&nbsp;
                          {row.lessonplan}
                        </TableCell>
                        <TableCell align="left" className={classes.progress}>
                          <ProgressWrapper>
                            <Box
                              sx={{
                                width: `${row.progress}%`,
                                bgcolor: "orange",
                                height: 8,
                                borderRadius: 5,
                              }}
                            />
                          </ProgressWrapper>
                          {row.progress}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </StyledTableWrapper>
            </TableContainer>
            <ViewButtonWrapper>
              {visibleRows < rows.length && (
                <StyledExpandButton>
                  View All Courses{" "}
                  <KeyboardArrowRightIcon
                    sx={{ fontSize: "24px", color: "#2F436280" }}
                  />
                </StyledExpandButton>
              )}
            </ViewButtonWrapper>
          </Box>
        </Wrapper>
      </StyledPerformanceWrapper>
      <Wrapper sx={{ marginTop: "16px", width: "1190px", padding: "2px" }}>
        <StyledRecentCourseWrapper>
          <StyledReacentCourseHeader>
            Recently Added Courses
          </StyledReacentCourseHeader>
          <Button
            disableElevation
            disableFocusRipple
            onClick={() => setExpanded(!expanded)}
            className={classes.viewAllCourses}
          >
            {expanded ? "Show Less" : "View All Courses"}
            <KeyboardArrowRightIcon
              className={classes.styledArrow}
            />
          </Button>
        </StyledRecentCourseWrapper>

        <Box
          sx={{
            flexGrow: 1,
            padding: "16px",
            whiteSpace: "nowrap",
            overflowX: expanded ? "visible" : "auto",
            scrollbarWidth: "thin",
            "&::-webkit-scrollbar": {
              height: "6px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#ccc",
              borderRadius: "10px",
            },
          }}
        >
          <Grid2
            container
            rowSpacing="24px"
            columnSpacing="18px"
            spacing={{ xs: 1, md: 2.4 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            sx={{
              flexWrap: expanded ? "wrap" : "nowrap",
              overflowX: expanded ? "visible" : "auto",
            }}
          >
            {courses?.length > 0 ? (
              courses.map((card: any) => (
                <Grid2 key={card.course_id} size={{ xs: 2, sm: 4, md: 4 }}>
                  <CardComponent {...card} path={`/courses/course-module/1`} />
                </Grid2>
              ))
            ) : (
              <Typography>No courses found.</Typography>
            )}
          </Grid2>
        </Box>
      </Wrapper>
    </>
  );
};

export default withAuth(Dashboard);
