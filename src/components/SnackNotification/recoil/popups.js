import {atom,selector} from "recoil";
const popupsAtom=atom({
    key:"popups",
    default: {}
})

const popupsAdder = selector({
    key:"popupsAdder",
    set:({set,get},newPopup)=>{
        const id=Math.random();
    }
})