import React from 'react';
import style from "./Team.module.scss";
import PersonCard from "../PersonCard/PersonCard";
import TuneIcon from '@material-ui/icons/Tune';
import gsap from "gsap";
import { useEffect } from 'react';

const Team = (props) => {
    useEffect(()=>{
        window.scrollTo(0,0);
    },[])
    const buttonsContainerRef=React.createRef(null);
    
    const [showButtons,setShowButtons]= React.useState("show")
    const toggleShowButtons=()=>{
        const offsetY=0;
        const offsetX=-25;
        if(showButtons==="show"){
            setShowButtons("wait")
            gsap.timeline()
            .to(buttonsContainerRef.current.children,{duration:0,y:offsetY,x:offsetX,opacity:0})
            .to(buttonsContainerRef.current.children,{duration:0,display:"inline-block"})
            .to(buttonsContainerRef.current.children,{duration:.3,y:0,x:0,stagger:.03,opacity:1})
            .then(()=>{
                setShowButtons("hide")
            })

        }
        else if (showButtons==="hide"){
            setShowButtons("wait")
            gsap.timeline().to(buttonsContainerRef.current.children,{duration:.3,y:offsetY,x:-offsetX,stagger:.03,opacity:0})
            .to(buttonsContainerRef.current.children,{duration:0,display:"none"})
            .then(()=>{
                setShowButtons("show")
            })
        }
    }
    const setActive=(buttonFilter)=>{
        setbuttons((state)=>{
            return state.map((elem)=>{
                if(elem.filter===buttonFilter){
                    return {
                        ...elem,
                        isActive:true
                    }
                }
                else{
                    return {
                        ...elem,
                        isActive:false
                    }
                }
            })
        })
        
    }
    const [filterBy,setFilterBy] = React.useState("")
    const [buttons,setbuttons]=React.useState([
        {
            label:"All Crew",
            filter:""
        },
        {
            label:"Web Developing",
            filter:"webdev"

        },
        {
            label:"Graphics",
            filter:"graphic"

        },
        {
            label:"Media",
            filter:"media"

        },
        {
            label:"Decoration and design",
            filter:"decor"

        },
        {
            label:"Photography",
            filter:"photograph"

        },
        {
            label:"Curation",
            filter:"curation"

        },
        {
            label:"Sponsorship",
            filter:"sponsership"

        },
    ])

    
    React.useEffect(()=>{
        setActive(filterBy)
    },[filterBy])

    return (
        <div className={style.container}>
            <div className={style.buttonsContainer}>
                <div>
                    <button className={style.filterBtn} onClick={()=>{toggleShowButtons()}}>
                        <TuneIcon />
                        <span>FILTER</span>
                    </button>
                </div>
                <div className={style.otherButtons} ref={buttonsContainerRef}>
                    {
                        buttons.map((button)=>{
                            return <button onClick={()=>{setFilterBy(button.filter)}} key={button.filter} className={[style.otherBtn,button.isActive ? style.active : ""].join(" ")}>{button.label}</button>
                        })
                    }
                </div>
            </div>
            <div className={style.teamContainer}>
                {
                    props.team.map((person,index)=>{
                        let shouldFilter;
                        filterBy!=="" && !person.groups.includes(filterBy) ? shouldFilter=true : shouldFilter=false;
                        return <div key={index} className={[style.cardContainer,shouldFilter ? style.filter : ""].join(" ")}><PersonCard name={person.name} image={person.image} description={person.description} socialMedia={person.socialMedia}/></div>
                    })
                }
            </div>
            
        </div>
    );
}
 
export default Team;