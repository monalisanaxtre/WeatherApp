import {GET_FNAME,GET_LNAME,GET_NUMBER, GET_EMAIL,GET_PASSWORD} from '../../constants';

export function firstName(fname){
    return {
        type: GET_FNAME,
        payload:fname
    }
}
export function lastName(lname){
    return {
        type: GET_LNAME,
        payload:lname
    }
}
export function number(number){
    return {
        type: GET_NUMBER,
        payload: number
    }
}
export function email(email){
    return {
        type: GET_EMAIL,
        payload: email
    }
}
export function password(password){
    return {
        type: GET_PASSWORD,
        payload:password
    }
}
