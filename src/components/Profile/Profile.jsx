import React from "react"
import './Profile.css'

export function Profile(props) {

    return (
        <div className="profile">
            <img src={props.imgSrc} />
            <h1>{props.name}</h1>
            <p>คุณออกกำลังกายต่อเนื่องมาแล้ว {props.day} วัน</p>
            <p>คุณออกกำลังกายล่าสุดเมื่อ {props.lastDay} วันที่แล้ว</p>
        </div>
    )
}

// todo change thai to eng