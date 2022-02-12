import React,{useState} from 'react';
import "./style.css";
import style from "./Navbar.module.scss";
import {Link,withRouter} from "react-router-dom";
import logo from "../../assets/images/logos/TEDxShirazuniversityLogo/logo-black-text.png";
import BurgerButton from "../BurgerButton/BurgerButton";

// import {AppBar} from "@material-ui/core";
import RzNavLink from '../RzNavLink/RzNavLink';
const Navbar = (props) => {
    const [linkClasses,setLinkClasses]= useState([style.linkContainer]);
    const [expandbtn,setExpandbtn]= useState(false);
    
    const removeExpandClass=(e)=>{
        let cp = linkClasses.filter((elem)=>{
            if(elem!==style.expand)
            {
                setExpandbtn(false)
                return elem;
            }
            return null;
        })
        setLinkClasses(cp);
    }
    
    const toggleNav=()=>{
        if (!linkClasses.includes(style.expand)){
            let cp=[...linkClasses,style.expand];
            setLinkClasses(cp);
            setExpandbtn(true)
        }
        else{
            removeExpandClass();
        }
    }

    return ( 
        <>
            <div className={style.spaceHolder}></div>
            <div className={style.nav}>
                <div className={style.logoContainer}>
                    <Link to="/2020"> <img height="50" src={logo} alt="Ravand Logo" draggable="false" /> </Link>        
                </div>
                <div onClick={toggleNav} className={style.burger}>
                    <BurgerButton expand={expandbtn}/>
                </div>
                <div className={linkClasses.join(" ")}>
                {/* <a href="https://www.aparat.com/event/4681" style={{
                    background:"#F0280B",
                    borderRadius:"4px" ,
                    padding:"10px 13px",
                    color:"#fff",
                    fontSize:".8em",
                    fontFamily:"Vazir",
                    boxShadow: "0 5px 15px 0 rgba(0,0,0,.08)",
                    margin:"0 10px"

                }} className={[style.items,style.ticket].join(" ")}>
                    GET A TICKET |
                    خرید بلیط
                </a> */}
                    {
                        props.links.map((elem,index)=>{
                            return <RzNavLink multiRoutes={elem.multiRoutes} exact={elem.exact} subLinksContainerClassName={elem.subLinksContainerClassName} routes={elem.routes} key={index} useAnchor={elem.useAnchor} url={elem.url} name={elem.name} id={elem.id ? elem.id : "" } className={[style.items,elem.className].join(" ")} activeClassName={style.active} onClick={()=>{removeExpandClass(); if(elem.onClick){elem.onClick()} }}  />
                        })
                    }
                </div>
            </div>
        </>
    );
}
export default withRouter(Navbar);