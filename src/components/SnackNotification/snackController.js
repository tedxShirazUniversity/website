import {atom } from  "recoil";

export const snackArray=atom({
    key:"snackArray",
    default:[]
})


// const addSnack=(message,duration=60)=>{
//     let id=Math.random();
//     let snacksCP=[...snacks];
//     let timeOutID=scheduleRemove(id,duration);
    
//     snacksCP.push({
//         message,
//         duration,
//         id,
//         timeOutID,
//     });
//     setSnacks(snacksCP);
// }
// const removeSnack=(id,timeOutID)=>{
//     if(timeOutID)
//     {
//         clearTimeout(timeOutID);
//     }
//     setSnacks((state)=>{
//         let cp=state.filter((elem)=>{
//             if(elem.id!==id)
//             {
//                 return elem
//             }
//             return null;
//         })
//         return cp;
//     });
// }
// const scheduleRemove=(id,duration)=>{
//     let timeOutID=setTimeout(()=>{
//         removeSnack(id,undefined);
//     },duration*1000);

//     return timeOutID;
// }