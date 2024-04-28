"use client";

import { courses } from "@/db/schema";
import { Card } from "./card"

type Props = {
    courses: typeof courses.$inferSelect[];
    activeCourseId: number;
};

export const List = ({ courses, activeCourseId}: Props) => {
    return (
        <div className = "pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
            {courses.map((course) => (
                <Card
                    key={course.id}
                    id={course.id}
                    name={course.courseName}
                    timePeriod = {course.timePeriod}
                    students = {course.students}
                    cases = {course.cases}
                    onClick={() => {}}
                    disabled={false}
                    active={course.id === activeCourseId} //made activeCourseId a string
                />
            ))}
        </div>
    );
};