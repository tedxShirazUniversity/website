import React from 'react';
import style from "./TitleMarquee.module.scss";

const TitleMarquee = (props) => {
    return (
        <div className={style.container}>
            <div className={style.background}>
                <div>{props.background}</div>
                <div>{props.background}</div>
                <div>{props.background}</div>
                <div>{props.background}</div>
            </div>
            <div className={style.titleContainer}>    
                <div className={style.title}>
                    {props.title}
                </div>
            </div>
        </div>
    );
}
 
export default TitleMarquee;