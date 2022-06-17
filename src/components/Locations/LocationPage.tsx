import React, {useEffect} from 'react';
import {LocationType, setLocationsTC, setLocationTC} from "../../store/locationsReducer";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType, TypedDispatch} from "../../store/store";
import {CharacterType, getCharactersTC} from "../../store/charactersReducer";
import Character from "../Characters/Character";
import style from './Locations.module.css'
import commonStyles from '../../common/common.module.css'
import ReactPaginate from "react-paginate";


const LocationPage = () => {
    const locationId = useParams<'id'>()
    const dispatch = useDispatch<TypedDispatch>()
    const location = useSelector<AppStateType, LocationType>((state) => state.locationsPage.locations[0])
    const characters = useSelector<AppStateType, Array<CharacterType>>((state) => state.charactersPage.results)

    useEffect(() => {
        if (locationId.id)
            dispatch(setLocationTC(locationId.id))
    }, [dispatch, locationId])
    useEffect(() => {
        dispatch(getCharactersTC(location.residents.map(ch => +ch.substr(42))))
        console.log(location.residents.map(ch => +ch.substr(42)))
        console.log(location)
    }, [location, dispatch])

    const onPageHandler = (page: number) => {
        dispatch(setLocationTC((page + 1).toString()))
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
                    pageRangeDisplayed={3}
                    pageCount={126}
                    previousLabel="<"
                    activeClassName={commonStyles.active}
                />
            </div>
            <h2 className={style.locationName}>{location.name}</h2>
            <div className={commonStyles.list}>
                {characters.map(ch => <Character key={ch.id + ch.name + ch.name} character={ch}/>)}
            </div>

        </div>
    );
};

export default LocationPage;