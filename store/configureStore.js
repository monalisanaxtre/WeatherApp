import { legacy_createStore as createStore, combineReducers } from 'redux';
import reducers from '../redux/Reducers/reducers';

const rootReducer = combineReducers(
    { info: reducers }
    
);
const configureStore = () => {
    return createStore(rootReducer);
}
export default configureStore;