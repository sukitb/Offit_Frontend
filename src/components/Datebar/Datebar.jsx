import React from "react";
import CalendarIcon from "../../assets/Calendar-Icon.svg"
import './Datebar.css'

// ! jquery can make a calendar

export function Datebar() {

    return(
        <div className="Datebar">
            <button><img src={CalendarIcon} /></button>
            <span>Wed, 10 august 2022</span>
        </div>
    )
}