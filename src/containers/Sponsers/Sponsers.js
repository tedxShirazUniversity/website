import React from 'react'
import style from "./Sponsers.module.scss";
import {newTabRedirect} from "../../scripts/general/general";

const SponsersGroup= (props)=>{
    let {group} = props;
    React.useEffect(()=>{
        window.scrollTo(0,0);
    },[])
    return (
        <div className={style.groupContainer}>
            <h3 className={style.title}>{group.title}</h3>
            <ul className={style.itemsContainer}>
                {
                    group.items.map((item,index)=>{
                        return (
                            <li key={index} className={[style.item,item.url ? style.hasLink : ""].join(" ")} onClick={item.url ? ()=>{newTabRedirect(item.url)} : null}>
                                <img width="110" src={item.image} alt={item.title} title={item.title} className={style.sponserImg} />
                            </li>)
                    })
                }
            </ul>
        </div>
    )
}


const Sponsers = (props) => {
    return ( 
        <div className={style.container}>
            {
                props.sponsers.map((elem,index)=>{
                    return <SponsersGroup key={index} group={elem} />
                })
            }
        </div>
    );
}
 
export default Sponsers;