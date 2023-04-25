import { useState } from "react";

const EducationLesson = (props) => {

    return (
        <div className="LessonSection">
            <h2>{props.items.lessonName}</h2>
            <p>{props.items.description}</p>
        </div>
    );
}

export default EducationLesson