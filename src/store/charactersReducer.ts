import axios from "axios";
import {Dispatch} from "redux";

const SET_CHARACTERS = 'SET_CHARACTERS'
const GET_CHARACTERS = 'GET_CHARACTERS'

export type CharacterType = {
    id: number //1,
    name: string //"Rick Sanchez",
    status: string //"Alive",
    species: string // "Human",
    type: string //"",
    gender: string //"Male",
    origin: {
        name: string //"Earth (C-137)",
        url: string //"https://rickandmortyapi.com/api/location/1"
    },
    location: {
        name: string //"Citadel of Ricks",
        url: string //"https://rickandmortyapi.com/api/location/3"
    },
    image: string //"https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    episode: Array<string>
    url: string //"https://rickandmortyapi.com/api/character/1",
    created: string //"2017-11-04T18:48:46.250Z"
}

export type CharactersPageType = {
    info: {
        count: number | null
        pages: number | null
        next: string | null
        prev: string | null
    },
    results: Array<CharacterType>
}

type allActionsType = setCharactersType | getCharactersType

type setCharactersType = ReturnType<typeof setCharactersAC>
type getCharactersType = ReturnType<typeof getCharactersAC>


export const setCharactersAC = (characters: CharactersPageType) => {
    return {
        type: SET_CHARACTERS,
        info: characters.info,
        results: characters.results
    } as const
}
export const getCharactersAC = (characters: Array<CharacterType>) => {
    return {
        type: GET_CHARACTERS,
        characters
    } as const
}

export const setCharactersTC = (page: number) => (dispatch: Dispatch) => {
    axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`).then(response => {
        dispatch(setCharactersAC(response.data))
    })
}
export const getCharactersTC = (pages: number[]) => (dispatch: Dispatch) => {

    axios.get(`https://rickandmortyapi.com/api/character/${pages}`).then(response => {
debugger
        if (Array.isArray(response.data)) {
            dispatch(getCharactersAC(response.data))
        } else {
            dispatch(getCharactersAC([response.data]))
        }

    }).catch(err=>{

        console.log(new Error(err))})
}

const InitialState: CharactersPageType = {
    info: {
        count: null,
        pages: null,
        next: null,
        prev: null
    },
    results: []
}

export const charactersReducer = (state = InitialState, action: allActionsType): CharactersPageType => {

    switch (action.type) {
        case SET_CHARACTERS:
            return {...state, info: action.info, results: [...action.results]}
        case GET_CHARACTERS:
            return {...state, results: [...action.characters]}
        default:
            return state
    }
}
