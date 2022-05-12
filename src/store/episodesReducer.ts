import axios from "axios";
import {Dispatch} from "redux";

const SET_EPISODES = 'SET_EPISODES'
const SET_EPISODE = 'SET_EPISODE'

export type EpisodeType = {
    id: number
    name: string
    air_date: string
    episode: string
    characters: Array<string>
    url: string
    created: string
}

export type EpisodesPageType = {
    info: {
        count: number | null
        pages: number | null
        next: string | null
        prev: string | null
    },
    results: Array<EpisodeType>
}

type allActionsType = setEpisodesType | setEpisodeType

type setEpisodesType = ReturnType<typeof setEpisodesAC>
type setEpisodeType = ReturnType<typeof setEpisodeAC>

export const setEpisodesAC = (episodes: EpisodesPageType) => {
    return {
        type: SET_EPISODES,
        info: episodes.info,
        results: episodes.results
    } as const
}
export const setEpisodeAC = (episode: EpisodeType) => {
    return {
        type: SET_EPISODE,
        episode
    } as const
}

export const setEpisodesTC = () => (dispatch: Dispatch) => {
    let episodes: Array<EpisodeType> = []
    axios.get(`https://rickandmortyapi.com/api/episode/?page=1`).then(response => {
        episodes = [...episodes, ...response.data.results]
        dispatch(setEpisodesAC({...response.data.info, results: [...episodes]}))
    })
    axios.get(`https://rickandmortyapi.com/api/episode/?page=2`).then(response => {
        episodes = [...episodes, ...response.data.results]
        dispatch(setEpisodesAC({...response.data.info, results: [...episodes]}))
    })
    axios.get(`https://rickandmortyapi.com/api/episode/?page=3`).then(response => {
        episodes = [...episodes, ...response.data.results]
        dispatch(setEpisodesAC({...response.data.info, results: [...episodes]}))
    })
}
export const setEpisodeTC = (id: string) => (dispatch: Dispatch) => {
    axios.get(`https://rickandmortyapi.com/api/episode/${id}`).then(response => {
                dispatch(setEpisodeAC(response.data))
    })
}

const InitialState: EpisodesPageType = {
    info: {
        count: null,
        pages: null,
        next: null,
        prev: null
    },
    results: []
}

export const episodesReducer = (state = InitialState, action: allActionsType): EpisodesPageType => {

    switch (action.type) {
        case SET_EPISODES:
            return {...state, info: action.info, results: [...action.results]}
        case SET_EPISODE:
            return {...state, results: [action.episode]}
        default:
            return state
    }
}