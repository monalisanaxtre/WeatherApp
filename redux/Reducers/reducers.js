import {GET_FNAME,GET_LNAME,GET_NUMBER,GET_EMAIL,GET_PASSWORD} from '../../constants';

const initialState = {
    fname:'',
    lname:'',
    number:'',
    email:'',
    password:'',
};

const allReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_FNAME:
            return {
                ...state,
                fname:action.payload
            };
        case GET_LNAME:
            return {
                ...state,
                lname:action.payload
            };
        case GET_NUMBER:
            return {
                ...state,
                number:action.payload
            };
        case GET_EMAIL:
            return {
                ...state,
                email:action.payload
            };
        case GET_PASSWORD:
            return {
                ...state,
                password:action.payload
            };
    }
}