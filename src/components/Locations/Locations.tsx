import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType, TypedDispatch} from "../../store/store";
import style from "./Locations.module.css";
import {LocationsPageType, setLocationsTC} from "../../store/locationsReducer";
import {NavLink} from "react-router-dom";
import commonStyles from '../../common/common.module.css'
import ReactPaginate from "react-paginate";

const Locations = () => {
    const dispatch = useDispatch<TypedDispatch>()
    const locations = useSelector<AppStateType, LocationsPageType>((state) => state.locationsPage)

    useEffect(() => {
        dispatch(setLocationsTC(1))
    }, [dispatch])

    const onPageHandler = (page: number) => {
        dispatch(setLocationsTC(page + 1))
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
                    pageCount={locations.pagesCount}
                    previousLabel="<"
                    activeClassName={commonStyles.active}
                />
            </div>
            <div className={commonStyles.list}>
                {locations.locations.map(lc => <NavLink to={`/locations/${lc.id}`} key={lc.id}
                                                        className={`${commonStyles.link} ${style.location}`}>
                    <div>{lc.name}</div>
                </NavLink>)}
            </div>
        </div>
    );
};

export default Locations;