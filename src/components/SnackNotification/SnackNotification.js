import React from 'react';
import style from "./SnackNotification.module.scss";
import Snack from "../Snack/Snack";
import {atom,useSetRecoilState, useRecoilValue,selector} from "recoil";
const cancelTimeout=(timeoutID)=>{
    clearTimeout(timeoutID);
}


const snackArrayAtom=atom({
    key:"snackArrayAtom",
    default:[]
})
const snackAdder=selector({
    key:"snackAdder",
    set:({set},newRawVal)=>{
        console.log("setter called");
        const id=Math.random();
        const setTimeoutID=setTimeout(() => {
            set(snackRemoverSelector,id);
        }, newRawVal.duration);

        //create new object of snackArray
        const newObj={
            id:id,
            msg:newRawVal.msg,
            setTimeoutID:setTimeoutID,
        }

        //assign new values
        set(snackArrayAtom,(prev)=>{
            return [...prev,newObj]
        });
    }
})

const snackRemoverSelector=selector({
    key:"snackRemoverSelector",
    set:({set},id)=>{
        set(snackArrayAtom,(prev)=>{
            return prev.filter(elem=>{
                if(elem.id !== id){
                    return elem;
                }
                return null;
            })
        });
    }
})
const SnackNotification = (props) => {


    
    const snackRemover=useSetRecoilState(snackRemoverSelector);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    const setter=useSetRecoilState(snackAdder);

    React.useEffect(() => {
        setter({msg:"die mother fucker die ",duration:2000});
        setTimeout(() => {
            setter({msg:"ok",duration:5000});
        }, 1000);
    }, [setter]);

    const snackArray=useRecoilValue(snackArrayAtom);
    React.useEffect(()=>{
        console.log(snackArray);
    },[snackArray])
    return (
        <div className={style.container}>
            <div className={style.snackContainer}>
            
                {
                    snackArray.map((elem)=>{
                        return (
                            <Snack 
                                key={elem.id} 
                                id={elem.id} 
                                // color="#fff" 
                                setTimeoutID={elem.setTimeoutID}
                                msg={elem.msg} 
                                removeSnack={snackRemover}
                            />)
                    })
                }
            </div>
        </div>
    );
}
export default SnackNotification;


/*

    const snackArrayAtom=atom({
        key:"snackArrayAtom",
        default:[]
    });

    // const [snackArray,setSnackArray]=React.useState([]);
    // 
    
    // const addToSnackArray=(newObj)=>{
    //     setSnackArray((latestState)=>{
    //         return [...latestState, newObj]
    //     })
    // }
    // const removeFromSnackArray=(elemID)=>{
    //     setSnackArray((state)=>{
    //         let cp=state.filter((elem)=>{
    //             if(elem.id!==elemID)
    //             {
    //                 return elem
    //             }
    //             return null;
    //         })
    //         return cp;
    //     });
    // }
    
    // const TimerDestructElem= (elemID,time)=>{
    //     const timerID=setTimeout(() => {
    //         removeFromSnackArray(elemID)
    //     }, time);
    //     return timerID;
    // }
    // const cancelTimeout=(timeoutID)=>{
    //     clearTimeout(timeoutID);
    // }
    // const addSnackAndSelfDestruct= (msg,duration)=>{
    //     const id=Math.random();
    //     const timerID=TimerDestructElem(id,duration);
    //     const newObj={
    //         id:id,
    //         msg:msg,
    //         timerID:timerID
    //     }
    //     addToSnackArray(newObj);
    // }
    
    // const closeSnack=(snackID, snackTimeoutID)=>{
    //     removeFromSnackArray(snackID);
    //     cancelTimeout(snackTimeoutID);
    // }

    // React.useEffect(()=>{
    //     setTimeout(() => {
    //         addSnackAndSelfDestruct("hellow there",3000);
    //     }, 500);

    //     setTimeout(() => {
    //         addSnackAndSelfDestruct("hey mf",10000);
    //     }, 1000);
        
    // },[])

  
    // React.useEffect(()=>{
    //     console.log(snackArray);
    // },[snackArray])
*/