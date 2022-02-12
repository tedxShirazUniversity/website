import React from 'react'
import {NavLink} from "react-router-dom";

const SubRoutes=(props)=>{
    return (
    <ul className={props.subLinksContainerClassName}>
        {props.routes.map((elem,index)=>{
            return <RzNavLink subRoutes={elem.subRoutes ? elem.subRoutes :"" } key={index} useRouter={elem.useRouter} url={elem.url} name={elem.name} id={elem.id ? elem.id : "" } className={elem.className} activeClassName={props.activeClassName} onClick={props.onClick} />
        })}
    </ul>)
}

const RzNavLink = (props) => {
        if(props.useAnchor)
        {
            return <a href={props.url} className={props.className} id={props.id} onClick={props.onClick} >{props.name} </a> 
        }
        if(props.multiRoutes)
        {
            return (
                <div className={props.className}>
                    {props.name}
                    <SubRoutes 
                        subLinksContainerClassName={props.subLinksContainerClassName} 
                        routes={props.routes} 
                        activeClassName={props.activeClassName} 
                        onClick={props.onClick}
                    />
                </div>)
        }
        if(!props.url){
            return (
                <div onClick={props.onClick} className={props.className} >
                    {
                        props.name
                    }
                </div>   
            )
        }
        return (
            <NavLink 
                    to={props.url} 
                    onClick={props.onClick} 
                    id={props.id} 
                    exact={props.exact} 
                    activeClassName={props.activeClassName}  
                    className={props.className}
                    > {props.name}
            </NavLink>
        )
         
    
}
 
export default RzNavLink;