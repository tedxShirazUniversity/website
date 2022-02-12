import React from 'react';
import style from "./TextImg.module.scss";

const textImg = (props) => {
    let classes;
    if(props.imgDirection==="right"){
        classes=style.rightImage
    }
    return (
        <div className={[style.container,classes,props.lang==="per" ? style.per : ""].join(" ")}>
            <div className={style.imgContainer}>
                <img width="400" src={props.img} alt={props.imgAlt}/>
            </div>
            <div className={style.text}>
                <div className={style.title}>{props.title}</div>
                <div className={style.description}>{props.description}</div>
            </div>
        </div>
    );
}
 
export default textImg;