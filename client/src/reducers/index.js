/**
 * The reducer updates the store when an action is 
 * dispatched from a component. The state should follow 
 * a core tenant of React, and not mutate the state.  Instead,
 * it should return a new state object, and return that instead. 
 */
import { ADD_COURSE, UPDATE_USER } from '../constants/action-types';

// initializing an empty state in case of no actions being dispatched
const initialState = {
    courses: [],
    userData: {}
};

/**
 * The root reduce is a method that updates the store, which means it updates the state
 * of the entire react app.  This depends on the action that is dispatched from a component.
 * In the case of an ADD_COURSE action, we want to
 * @param {the current state that we will generate the new state from} state 
 * @param {the action type we want to perform, and the information associated with performing this action} action 
 * @return {Returns a new state object, not a mutated version of the state object that was passed in}
 */
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COURSE: 
            return {...state, courses: [...state.courses, action.payload]};
        case UPDATE_USER:
            return {...state, userData: Object.assign({}, action.payload)};
        default: 
            return state;
    }
};

export default rootReducer;