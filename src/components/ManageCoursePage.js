import react, { useState }  from 'react';
import CourseForm from './CourseForm';

const ManageCoursePage = props => {
    const [ course, setCourse ] = useState({
        id: null,
        slug: "",
        title: null,
        authorId: null,
        category: null
    });
    return(
        <>
            <h2>Manage Course</h2>
            <CourseForm course = {course}></CourseForm>
            {props.match.params.slug}
        </>
    )
}

export default ManageCoursePage;