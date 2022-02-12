import React from 'react';
import style from "./Divider.module.scss";
const DividerWithTitle = (props) => {
    const isNoText=props.title === undefined ;
    return (
        <div className={style.container} style={props.style}>
            <div className={[style.before,props.textAlign==="left" ? style.none : "",isNoText ? style.noMargin : ""].join(" ")}></div>
            {
                !isNoText ? 
                <div className={style.title}>{props.title}</div>
                :
                null
            }
            <div className={[style.after,props.textAlign==="right" ? style.none : "",isNoText ? style.noMargin : ""].join(" ")}></div>
        </div>
    )
}
 
export default DividerWithTitle;