import {AnyAction, applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import thunk, {ThunkDispatch} from "redux-thunk";
import {episodesReducer} from "./episodesReducer";
import {charactersReducer} from "./charactersReducer";

const rootReducer = combineReducers({
    episodesPage: episodesReducer,
    charactersPage: charactersReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppStateType = ReturnType<typeof rootReducer>

export type TypedDispatch = ThunkDispatch<AppStateType, any, AnyAction>;

export default store;