import React, {useEffect, useState} from "react";
import './Header.css'
import {useLocation} from "react-router-dom";
import {nav} from "../../routes/nav";


export function Header() {

    const location = useLocation();

    /* state */
    const [title, setTitle] = useState("Заголовок")

    useEffect(() => {
        nav.filter(({path, title}) => {
            if (path === location.pathname) setTitle(title)
        })
    }, [location])

    return (
        <header className="header">
            <div className="header__title">
                <h3>{title}</h3>
            </div>
        </header>
    )
}