"use client";
import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect, useState } from "react";
import { courses } from "@/data/courseData";
import { Typography } from "@mui/material";

const CourseModule = () => {
  const router = useRouter();
  const { id } = router.query;
  const [course, setCourse] = useState<{
    title: string;
    description: string;
    image: string;
  } | null>(null);

  useEffect(() => {
    if (!router.isReady || !id) return;

    const selectedCourse = courses.find((course) => course.id === id);
    if (selectedCourse) {
      setCourse(selectedCourse);
    }
  }, [id, router.isReady]);

  if (!router.isReady || !course) return <p>Loading...</p>;

  return (
    <div>
      <Typography variant="h4">Course Module: {course.title}</Typography>
      <Typography variant="subtitle1">{course.description}</Typography>
      <Image src={course.image} alt={course.title} width={400} height={250} />
    </div>
  );
};

export default CourseModule;
