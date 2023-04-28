import TestButton from '../Education/TestButton';
import Lessons from '../Education/EducationDescription'

import { UserContext, LoginStatus } from "../../context/UserContext";
import { useContext } from 'react';
import { useParams } from 'react-router-dom';

const CourseContent = (props) => {
    

    return (
        <>
            <h1>{props.id}</h1>
        </>
    );
}

export default CourseContent