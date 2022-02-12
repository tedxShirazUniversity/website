import React from 'react';
import style from "./PersonCard.module.scss";
import {Instagram,EmailOutlined as Email} from "@material-ui/icons";
const PersonCard = (props) => {
    return (
        <div className={style.card}>
            <div className={style.imageContainer}>
                <img width="200" src={props.image} alt={props.name} draggable="false" />
            </div>
            <div className={style.detail}>
                <div className={style.name}>{props.name}</div>
                {
                    props.description ?
                    <div className={style.desc}>{props.description}</div>
                    :
                    null
                }
                {
                    !props.socialMedia ? null :
                    (
                        <div className={style.socialMedia}>
                            <ul>
                                {
                                    props.socialMedia.map((elem)=>{
                                        let Icon;
                                        if(elem.media==="instagram"){
                                            Icon=Instagram
                                        }
                                        else if(elem.media==="email"){
                                            Icon=Email
                                        }
                                        return <li key={elem.media}><a href={elem.link}><Icon /></a></li>
                                    })
                                }
                            </ul>
                        </div>
                    )
                }
            </div>
        </div>
    );
}
 
export default PersonCard;