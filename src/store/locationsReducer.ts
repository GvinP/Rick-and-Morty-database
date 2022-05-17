import axios from "axios";
import {Dispatch} from "redux";

const SET_LOCATIONS = 'SET_LOCATIONS'
const GET_LOCATIONS = 'GET_LOCATIONS'

export type LocationType = {
    id: number
    name: string
    type: string
    dimension: string
    residents: Array<string>
    url: string
    created: string
}

export type LocationsPageType = {
    pagesCount: number
    locations: Array<LocationType>
}

type allActionsType = setCharactersType | getCharactersType

type setCharactersType = ReturnType<typeof setLocationsAC>
type getCharactersType = ReturnType<typeof getLocationsAC>


export const setLocationsAC = (pagesCount: number, locations: Array<LocationType>) => {
    return {
        type: SET_LOCATIONS,
        pagesCount,
        locations
    } as const
}
export const getLocationsAC = (locations: Array<LocationType>) => {
    return {
        type: GET_LOCATIONS,
        locations
    } as const
}

export const setLocationsTC = (page: number) => (dispatch: Dispatch) => {
    axios.get(`https://rickandmortyapi.com/api/location/?page=${page}`).then(response => {
        dispatch(setLocationsAC(response.data.info.count, response.data.results))
    })
}
// export const getLocationsTC = (pages: number[]) => (dispatch: Dispatch) => {
//     axios.get(`https://rickandmortyapi.com/api/character/${pages}`).then(response => {
//         dispatch(getCharactersAC(response.data))
//     }).catch(err=>{
//         console.log(new Error(err))})
// }

const InitialState: LocationsPageType = {
    pagesCount: 1,
    locations: []
}

export const locationsReducer = (state = InitialState, action: allActionsType): LocationsPageType => {
    switch (action.type) {
        case SET_LOCATIONS:
            return {...state, pagesCount: action.pagesCount, locations: [...action.locations]}
        case GET_LOCATIONS:
            return state
        default:
            return state
    }
}
