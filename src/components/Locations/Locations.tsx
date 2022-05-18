import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType, TypedDispatch} from "../../store/store";
import Pagination from "rc-pagination";
import style from "./Locations.module.css";
import {LocationsPageType, setLocationsTC} from "../../store/locationsReducer";
import {NavLink} from "react-router-dom";

const Locations = () => {
    const dispatch = useDispatch<TypedDispatch>()
    const locations = useSelector<AppStateType, LocationsPageType>((state) => state.locationsPage)

    useEffect(() => {
        dispatch(setLocationsTC(1))
    }, [dispatch])

    const onPageHandler = (page: number) => {
        dispatch(setLocationsTC(page))
    }
    return (
        <div>
            <Pagination className="ant-pagination"
                        showTitle={false}
                        defaultCurrent={1}
                        total={locations.pagesCount ? locations.pagesCount : 10}
                        onChange={(e) => onPageHandler(e)}
                        defaultPageSize={20}
            />
            <div className={style.locationsList}>
                {locations.locations.map(lc => <NavLink to={`/locations/${lc.id}`}><div className={style.location}>{lc.name}</div></NavLink>)}
            </div>
        </div>
    );
};

export default Locations;