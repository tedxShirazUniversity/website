import React from 'react';
import style from "./EventCard.module.scss";
import {Link,NavLink} from "react-router-dom";

const EventCard = (props) => {
    const monthNames = ["Jan", "Feb", "March", "April", "May", "June",
        "July", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const date= props.date.getDate()  + " " + monthNames[props.date.getMonth()] + " " + props.date.getFullYear();
    
    return (
        <div className={style.container}>
            <div className={style.header}>
                <div className={style.title}>
                    <NavLink to={props.url} onClick={props.onClick}>
                        {props.title}
                    </NavLink>
                </div>
                <div className={style.date}>
                    {date}
                </div>
            </div>
            <div className={style.imageContainer}>
                <Link to={props.url} onClick={props.onClick}>
                    <img draggable="false" width="100" src={props.pics[0].url} alt={props.pics[0].title}/>
                </Link>
            </div>
        </div>
    );
}
 
export default EventCard;