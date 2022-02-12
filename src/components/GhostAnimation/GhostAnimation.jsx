import React from 'react';
import style from "./GhostAnimation.module.scss";

const GhostAnimation = (props) => {
    return (
        <div className={style.bg}>
            <div className={style.container}>
                <div className={style.text}>
                    {props.text}
                </div>
                <div className={style.overlay}></div>
            </div>
        </div>
    );
}
 
export default GhostAnimation;