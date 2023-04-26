import Button from '../Elements/Button';
import './EducationLesson.css'
import TestButton from './TestButton';

import { UserContext, LoginStatus } from "../../context/UserContext";
import { useContext } from 'react';

const EducationLesson = (props) => {
    const { userPayload, loginStatus, setUserDataByDispatch,  } = useContext(UserContext);
    
    return (
        <>
            <div className="LessonSection"> 
            <h2>{props.items.lessonName}</h2>
            <p>{props.items.description}</p>

            <div className='TestsSection'>
                <TestButton items={props.items}/>
            </div>

            {loginStatus == LoginStatus.LoggedOut && <>
                <Button Value="Read more" href="/login"></Button>
                </>
            }

            {loginStatus == LoginStatus.LoggedIn && <>
                <Button Value="Read more" href={'/courseId/'+props.items.id}></Button>
                </>
            }
        </div>
        </>
        
    );
}

export default EducationLesson