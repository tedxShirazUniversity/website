import React, { createContext, useState } from "react";

export const SnackController = createContext();

const SnackControllerProvider = props => {
    const [snacks,setSnacks]=useState([]);

    const addSnack=(message,duration=60)=>{
        let id=Math.random();
        let snacksCP=[...snacks];
        let timeOutID=scheduleRemove(id,duration);
        
        snacksCP.push({
            message,
            duration,
            id,
            timeOutID,
        });
        setSnacks(snacksCP);
    }
    const removeSnack=(id,timeOutID)=>{
        timeOutID && clearTimeout(timeOutID);
        
        setSnacks((state,props)=>{
            let cp=state.filter((elem)=>{
                if(elem.id!==id)
                {
                    return elem
                }
                return null;
            })
            return cp;
        });
    }
    const scheduleRemove=(id,duration)=>{
        let timeOutID=setTimeout(()=>{
            removeSnack(id,undefined);
        },duration*1000);

        return timeOutID;
    }

    return (
        <SnackController.Provider value={{snackArray:[...snacks],addSnack,removeSnack}}>
            {props.children}
        </SnackController.Provider>
    );
  
};

export default SnackControllerProvider;
