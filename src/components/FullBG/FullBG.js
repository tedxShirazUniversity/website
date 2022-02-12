import React,{createRef
    // ,useEffect
} from 'react';
import style from "./FullBG.module.scss";
// import gsap from "gsap";
const FullBG = (props) => {
    const backimgRef=createRef()
    // useEffect(()=>{
        // gsap.to(backimgRef.current,{filter:`blur(${props.blur}px)`,duration:0})
    // })
    return ( 
        <div className={style.container}>
            <div ref={backimgRef} className={style.backimg} style={{backgroundImage:"url(" + props.img + ")",filter:`blur(${props.blur}px)`}}></div>
        </div>
    );
}
export default FullBG;