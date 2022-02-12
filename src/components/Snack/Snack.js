import React from 'react';
import style from "./Snack.module.scss";
import {Close as CloseBtn} from '@material-ui/icons';
const Snack = (props) => {
    return ( 
        <div className={style.snack}>
            <div className={style.message} style={{color:props.color}}>
                {props.msg}
            </div>
            <div className={style.btnContainer} onClick={()=>props.removeSnack(props.id,props.timerID)}>
                {/* <span className={style.btn}> */}
                    <CloseBtn  className={style.btn}/>
                {/* </span> */}
                
            </div>
        </div>
    );
}
 
export default Snack;