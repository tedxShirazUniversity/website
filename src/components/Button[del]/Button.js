import React from 'react';
import style from "./Button.module.scss";
const Button = (props,{type="button"}) => {
    return (
        <div className={props.className}>
            {/* <button type={type} className={style.button}>
                {props.children}
            </button> */}
        </div>
    );
}
 
export default Button;