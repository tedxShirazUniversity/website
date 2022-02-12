import React from 'react';
import {Today as CalendarIcon ,Schedule as ClockIcon} from '@material-ui/icons';
import style from "./Timer.module.scss";

const Timer = (props) => {
    return ( 
            <div className={style.timer}>
                <div className={style.logoContainer}>
                    <img draggable="false" width="200" src={props.img} alt="logo"/>
                </div>
                <div className={style.day}>

                    <CalendarIcon className={style.icon}/>
                    <div>
                        {props.date}
                    </div>
                </div>
                <div className={style.hour} >
                    <ClockIcon className={style.icon} />
                    <div>
                        {props.time}
                    </div>
                </div>
                <div className={style.linksContainer}>
                    {
                        !props.primaryBtn ? null : <button className={style.primary}>Register</button>
                    }
                    {
                        !props.secondaryBtn ? null : <button className={style.secondary}>Nominate</button>
                    }
                    
                </div>
            </div>
    );
}
 
export default Timer;