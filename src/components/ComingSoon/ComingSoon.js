import React from 'react';
import style from "./CoomingSoon.module.scss";
import SocialMedia from "../../containers/SocialMedia/SocialMedia"
// import gsap from "gsap";
import FullBG from "../FullBG/FullBG";

const CoomingSoon = (props) => {
    const logoContainerRef=React.createRef();
    const comingSoonRef=React.createRef();
    return (
        <div className={style.container} >
            <FullBG img={props.backgroundImage} blur={10}/>
            <div className={style.row1}>
                <div ref={logoContainerRef} className={style.logoContainer}>
                    <img draggable="false" width="200" src={props.logo} alt="Logo"/>
                </div>
            </div>
            <div className={style.row2}>
                <h1 className={style.title} ref={comingSoonRef}>
                    COMING SOON
                </h1>
                <div  className={style.desc}>
                    Sorry for the inconvenience but we're performing some maintenance at the moment. if you need to you can always <a className={style.contactEmail} href={"mailto:"+props.contactEmail}>contact us</a>, otherwise we'll be back online shortly.
                </div>
            </div>
            <div className={style.row3}>
                <SocialMedia />
            </div>
        </div>
    );
}
 
export default CoomingSoon;