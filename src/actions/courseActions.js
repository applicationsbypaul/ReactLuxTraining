import dispatcher from '../appdispatcher';
import * as courseApi from '../api/courseApi';
import actionTypes from '../actionTypes';

export function saveCourse(course){
    courseApi.saveCourse(course).then(saveCourse => {
        return dispatcher.dispatch({
            actionType: actionTypes.CREATE_COURSE,
            course: saveCourse
        });
    });
}