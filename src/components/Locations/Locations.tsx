import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType, TypedDispatch} from "../../store/store";
import Pagination from "rc-pagination";
import style from "./Locations.module.css";
import {LocationsPageType, setLocationsTC} from "../../store/locationsReducer";
import {NavLink} from "react-router-dom";
import linkStyle from "../../common/common.module.css";
import ReactPaginate from "react-paginate";

const Locations = () => {
    const dispatch = useDispatch<TypedDispatch>()
    const locations = useSelector<AppStateType, LocationsPageType>((state) => state.locationsPage)

    useEffect(() => {
        dispatch(setLocationsTC(1))
    }, [dispatch])

    const onPageHandler = (page: number) => {
        dispatch(setLocationsTC(page+1))
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
                pageCount={locations.pagesCount}
                previousLabel="<"
                activeClassName={linkStyle.active}
            />
            <div className={style.locationsList}>
                {locations.locations.map(lc => <NavLink to={`/locations/${lc.id}`} key={lc.id}><div className={style.location}>{lc.name}</div></NavLink>)}
            </div>
        </div>
    );
};

export default Locations;