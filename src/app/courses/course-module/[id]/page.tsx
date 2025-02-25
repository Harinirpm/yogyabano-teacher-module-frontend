"use client";
import { useRouter } from "next/router";
import Image from "next/image";
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
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import { Box, Button, Container, Typography } from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import LifeSkill from "@/app/assets/lifeskill.png";
import Communication from "@/app/assets/communication.png";
import Problem from "@/app/assets/problem.png";
import WithAuth from "@/app/components/WithAuth";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch, { SwitchProps } from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Assessment from "@/app/assets/Assesment";
import { useParams } from "next/navigation";

function createData(lessonplan: string) {
  return { lessonplan };
}

const rows = [
  createData("Lesson Plan 1"),
  createData("Lesson Plan 2"),
  createData("Presentation"),
  createData("Assessment"),
];

export const courses = [
  {
    id: "1",
    title: "Essential life skills",
    grade: "Grade 8",
    description:
      "This course equips students with vital life skills such as effective communication,decision-making, and problem-solving. Through engaging lessons and activities, learners will build confidence and resilience to tackle everyday challenges.",
    image: LifeSkill,
  },
  {
    id: "2",
    title: "Communication skills",
    grade: "Grade 9",
    description:
      "This course equips students with vital life skills such as effective communication,decision-making, and problem-solving. Through engaging lessons and activities, learners will build confidence and resilience to tackle everyday challenges.",
    image: Communication,
  },
  {
    id: "3",
    title: "Problem Solving",
    grade: "Grade 3",
    description:
      "This course equips students with vital life skills such as effective communication,decision-making, and problem-solving. Through engaging lessons and activities, learners will build confidence and resilience to tackle everyday challenges.",
    image: Problem,
  },
];

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "#FF7500",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));

const StyledBox = styled(Box)({
  backgroundColor: "#2F4362",
  height: "auto",
  marginBottom: "32px",
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
  },
  tablefirstcellhead: {
    color: "#2F4362",
    fontSize: "18px",
    fontWeight: 600,
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  tablesecondcellhead: {
    pr: "4px",
    color: "#FF7500",
    fontSize: "10px",
    fontWeight: 500,
    lineHeight: "normal",
  },
  downloadMaterial :{
    color: "#FF7500",
    fontSize: "10px",
    fontWeight: 500,
    textTransform: "none",
    padding: "4px 8px",
    "&:hover": { backgroundColor: "#fff" },
  },
});
const CourseModule = () => {
  const classes = useStyles();
  const { id } = useParams();
  const course = courses.find((course) => course.id === id);
  if (!course) {
    return (
      <Typography sx={{ textAlign: "center", mt: 4 }}>
        Course not fount!...
      </Typography>
    );
  }

  const renderIcon = (type: string) => {
    if (type.startsWith("Lesson Plan"))
      return (
        <EventNoteOutlinedIcon
          sx={{ fontSize: "24px", transform: "rotate(180deg) scaleX(-1)" }}
        />
      );
    else if (type.startsWith("Presentation"))
      return (
        <BurstModeOutlinedIcon
          sx={{ fontSize: "24px", transform: "rotate(180deg) scaleY(-1)" }}
        />
      );
    else if (type.startsWith("Assessment"))
      return <Assessment height={24} width={24} />;
    else return null;
  };

  const renderViewIcon = (type: string) => {
    if (type.startsWith("Lesson Plan"))
      return (
        <VisibilityOutlinedIcon
          sx={{
            fontSize: "24px",
            transform: "rotate(180deg) scaleX(-1)",
            color: "#2F4362CC",
          }}
        />
      );
    else if (type.startsWith("Presentation"))
      return (
        <FileDownloadOutlinedIcon
          sx={{
            fontSize: "24px",
            transform: "rotate(180deg) scaleY(-1)",
            color: "#2F4362CC",
          }}
        />
      );
    else if (type.startsWith("Assessment"))
      return (
        <FileDownloadOutlinedIcon
          height={24}
          width={24}
          sx={{ color: "#2F4362CC" }}
        />
      );
    else return null;
  };
  const handleDownload = () => {
    const link = document.createElement("a");
    // link.href = "url";
    link.download = "Material.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Box>
        <StyledBox>
          <Box display="flex" sx={{ padding: "30px 131px" }}>
            <Image
              src={course.image.src}
              alt={course.title}
              height={260}
              width={260}
              style={{ borderRadius: "12px" }}
              className={classes.imgStyle}
            />
            <Box className={classes.textBoxStyles}>
              <Typography className={classes.styledTypo}>
                {course.title}
              </Typography>
              <Typography className={classes.styledTypo2}>
                {course.grade}
              </Typography>
              <Typography className={classes.styledTypo3}>
                {course.description}
              </Typography>
            </Box>
          </Box>
        </StyledBox>

        {/* <TableContainer component={Paper} > */}
        <Box className={classes.tableBox}>
          <Table sx={{ minWidth: 100 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left" className={classes.tablefirstcellhead}>
                  <DescriptionOutlinedIcon
                    sx={{
                      fontSize: "24px",
                      transform: "rotate(180deg) scaleX(-1)",
                    }}
                  />
                  Exploring Life Skills
                </TableCell>
                <TableCell
                  align="right"
                  className={classes.tablesecondcellhead}
                >
                  <Button
                    variant="text"
                    className={classes.downloadMaterial}
                    // onClick={() => handleDownload()}
                  >
                    Download Materials
                  </Button>
                </TableCell>
                <TableCell
                  sx={{
                    pr: "1px",
                    width: "140px",
                    color: "#2F4362CC",
                    fontSize: "10px",
                    fontWeight: 500,
                    lineHeight: "normal",
                  }}
                >
                  Mark as Taught
                </TableCell>
                <TableCell sx={{ pr: "14px", width: "20px" }}>
                  <AntSwitch
                    defaultChecked
                    inputProps={{ "aria-label": "ant design" }}
                  />
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.lessonplan}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{
                      color: "#2F4362CC",
                      fontSize: "16px",
                      fontWeight: 500,
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    {renderIcon(row.lessonplan)}
                    {row.lessonplan}
                  </TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right">
                    {renderViewIcon(row.lessonplan)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
        {/* </TableContainer> */}
      </Box>
    </>
  );
};

export default WithAuth(CourseModule);
