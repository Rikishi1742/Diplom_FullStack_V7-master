import './EducationLesson.css'
import TestButton from './TestButton';

const EducationLesson = (props) => {

    return (
        <div className="LessonSection"> 
            <h2>{props.items.lessonName}</h2>
            <p>{props.items.description}</p>

            <div className='TestsSection'>
                <TestButton items={props.items.testsId}/>
            </div>
        </div>
    );
}

export default EducationLesson