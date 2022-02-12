import React from 'react';
import style from "./Speakers.module.scss";
import TextImg from "../../components/TextImg/TextImg";

const Speakers = (props) => {
    React.useEffect(()=>{
        window.scrollTo(0,0);
    },[])
    return (
        <div className={style.container}>
            {
                props.speakers.map((speaker,index)=>{
                    return <div key={index} className={style.textImgContainer} > <TextImg lang={props.lang} title={speaker.name} img={speaker.img} imgAlt={speaker.name} description={speaker.description} imgDirection={index % 2===0 ? "left" : "right" }  /> </div>
                })
            }
        </div>
    );
}
 
export default Speakers;