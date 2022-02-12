import React,{ useRef, useEffect } from "react";

const useOutsideAction=(ref,action)=> {
    useEffect(() => {
        const handleClickOutside=(event)=> {
            if (ref.current && !ref.current.contains(event.target) && action) {
                action();
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref,action]);

}

export const ClickAwayAction=(props)=> {
    const wrapperRef = useRef(null);
    useOutsideAction(wrapperRef,props.action);
    return <div ref={wrapperRef}>{props.children}</div>;
}
