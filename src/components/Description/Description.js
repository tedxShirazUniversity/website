import React from 'react';
import style from "./Description.module.scss";

const Description = (props) => {
    return (
        <>
            <h3 className={style.title}>
                {props.title}
            </h3>
            <p className={style.description}>
                {props.description}
            </p>
        </>
    );
}
 
export default Description;