import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType, TypedDispatch} from "../../store/store";
import {CharactersPageType, setCharactersTC} from "../../store/charactersReducer";
import Character from "./Character";
import style from './Characters.module.css'
import ReactPaginate from "react-paginate";
import commonStyles from '../../common/common.module.css'

const Characters = () => {
    const dispatch = useDispatch<TypedDispatch>()
    const characters = useSelector<AppStateType, CharactersPageType>((state) => state.charactersPage)

    useEffect(() => {
        dispatch(setCharactersTC(1))
    }, [dispatch])

    const onPageHandler = (page: number) => {
        dispatch(setCharactersTC(page + 1))
    }

    return (
        <div>
            <div className={commonStyles.pagination}>
                <ReactPaginate
                    breakLabel="..."
                    breakClassName={commonStyles.link}
                    containerClassName={commonStyles.linksContainer}
                    pageClassName={commonStyles.link}
                    activeLinkClassName={commonStyles.active}
                    pageLinkClassName={commonStyles.link}
                    previousClassName={commonStyles.link}
                    nextClassName={commonStyles.link}
                    nextLabel=">"
                    onPageChange={(e) => onPageHandler(e.selected)}
                    pageRangeDisplayed={2}
                    pageCount={characters.info.pages || 42}
                    previousLabel="<"
                    activeClassName={commonStyles.active}
                />
            </div>

            <div className={commonStyles.list}>
                {characters.results.map(ch => <Character key={ch.id} character={ch}/>)}
            </div>
        </div>
    );

};

export default Characters;
