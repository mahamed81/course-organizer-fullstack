import request from 'superagent';
import { GET_COURSE_DATA, GET_COURSE_RECEIVED, GET_ERROR } from '../constants/action-types';

const API = 'http://localhost:5000/api/';
const COURSE = 'courses/';
const DEP = 'department/';
const USER = 'users/';

const DataService = store => next => action => {
    next(action)
    switch (action.type) {
        case GET_COURSE_DATA:
            request.get(API + COURSE).end((err, res) =>{
                if (err) {
                    return next({
                        type: GET_ERROR,
                        err
                    });
                }
                const data = JSON.parse(res.text);

                next({
                    type: GET_COURSE_RECEIVED,
                    data
                });
            });
            break;
        default:
            break;
    }
}

export default DataService;