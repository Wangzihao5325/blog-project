import { combineReducers, applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';

import testReducer from './reducers/testReducer';
import menuReducer from './reducers/menuReducer';

const rootReducer = combineReducers({
    test: testReducer,
    menu: menuReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;