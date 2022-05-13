import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType, TypedDispatch} from "../../store/store";
import {CharactersPageType, setCharactersTC} from "../../store/charactersReducer";
import Character from "./Character";
import Pagination from "rc-pagination";
import style from './Characters.module.css'

const Characters = () => {
    const dispatch = useDispatch<TypedDispatch>()
    const characters = useSelector<AppStateType, CharactersPageType>((state) => state.charactersPage)

    useEffect(() => {
        dispatch(setCharactersTC(1))
    }, [dispatch])

    const onPageHandler = (page: number) => {
        dispatch(setCharactersTC(page))
    }

    return (
        <div>
            <Pagination className="ant-pagination"
                        showTitle={false}
                        defaultCurrent={1}
                        total={characters.info.count ? characters.info.count : 10}
                        onChange={(e) => onPageHandler(e)}
                        defaultPageSize={20}
            />
            <div className={style.charactersList}>
                {characters.results.map(ch => <Character character={ch}/>)}
            </div>
        </div>
    );

};

export default Characters;
