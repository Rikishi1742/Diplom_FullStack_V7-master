import EducationLessons from "./EducationLesson";

const EducationDescription = (props) => {
    let LessonsCount = props.LessonsCount;
    let ElemArray = [];

    for (let i = 0; i < props.LessonsCount; i++) {
        ElemArray[i] = <EducationLessons />
    }

    return (
        <>
            
        </>
    );
}

export default EducationDescription