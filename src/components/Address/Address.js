import React from 'react';
import style from "./Address.module.scss"
const Adress = (props) => {
    return ( 
        <div className={style.root}>
            <div className={style.info}>
                <h2 className={style.title}>OFFICE</h2>
                <div className={style.address}>
                    {props.address}
                </div>
            </div>
            <div className={style.map}>
                <iframe className={style.iframe} title="Google map location" src={props.mapIframeSrc} loading="lazy" width="600" height="450" frameBorder="0"></iframe>
            </div>
        </div>
    );
}
 
export default Adress;