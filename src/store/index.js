import { combineReducers, createStore } from "redux";
import sidebarReducer from './sidebarMenu/reducer'

const reducers = combineReducers({
    sidebarReducer,
})

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default store