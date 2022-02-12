import React from 'react';
import style from "./Card.module.scss";
import {Link} from "react-router-dom";

const Card = (props) => {
    return (
        <div className={style.card}>
            <div className={style.imgContainer}>
                <img draggable="false" width="200" src={props.img} alt={props.imgAlt}/>
            </div>
            <div className={style.header}>
                <div className={style.title}>
                    <Link to={props.link}>
                        {props.title}
                    </Link>
                </div>
                <div className={style.sub}>
                    {props.date}
                </div>
            </div>
            <div className={style.descriptionContainer}>
                <p className={[style.description,props.lang==="per" ? style.per : ""].join(" ")}>
                    {props.description}
                </p>
            </div>
            <div className={style.buttonContainer}>
                <Link to={props.link}>
                    <button >
                        READ MORE
                    </button>
                </Link>
            </div>
        </div>
        
    );
}
 
export default Card;