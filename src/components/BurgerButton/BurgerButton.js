import React from 'react';

import style from "./BurgerButton.module.scss";


const BurgerButton = (props) => {
    return ( 
        <div className={[style.burger,props.expand ? style.expand : " "].join(" ")}>
            <div className={style.r1}></div>
            <div className={style.r2}></div>
            <div className={style.r3}></div>
        </div>
     );
}
 
export default BurgerButton;