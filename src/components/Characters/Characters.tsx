import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType, TypedDispatch} from "../../store/store";
import {CharactersPageType, setCharactersTC} from "../../store/charactersReducer";
import Character from "./Character";
import linkStyle from '../../common/common.module.css'
import style from './Characters.module.css'
import ReactPaginate from "react-paginate";

const Characters = () => {
    const dispatch = useDispatch<TypedDispatch>()
    const characters = useSelector<AppStateType, CharactersPageType>((state) => state.charactersPage)

    useEffect(() => {
        dispatch(setCharactersTC(1))
    }, [dispatch])

    const onPageHandler = (page: number) => {
        dispatch(setCharactersTC(page+1))
    }

    return (
        <div>
            <ReactPaginate
                breakLabel="..."
                breakClassName={linkStyle.link}
                containerClassName={linkStyle.linksContainer}
                pageClassName={linkStyle.link}
                activeLinkClassName={linkStyle.active}
                pageLinkClassName={linkStyle.link}
                previousClassName={linkStyle.link}
                nextClassName={linkStyle.link}
                nextLabel=">"
                onPageChange={(e)=>onPageHandler(e.selected)}
                pageRangeDisplayed={3}
                pageCount={characters.info.pages||42}
                previousLabel="<"
                activeClassName={linkStyle.active}
            />
            <div className={style.charactersList}>
                {characters.results.map(ch => <Character key={ch.id} character={ch}/>)}
            </div>
        </div>
    );

};

export default Characters;
