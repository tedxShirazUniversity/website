export const newTabRedirect=(url)=>{
    //safe new tab open like: <a rel="noopener noreferrer" target="_blank" href="someUrl" > </a>
    let otherWindow = window.open();
    otherWindow.opener = null;
    otherWindow.location = url;
}

export const timestampToDate=(timestamp)=>{
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const d=new Date(timestamp * 1000);
    const date={
        year : d.getFullYear(),
        month : months[d.getMonth()],
        day : d.getDate(),
        hour : d.getHours(),
        minute : d.getMinutes(),
        second : d.getSeconds()
    }

    return date ;
}

export const hasTimePassed=(d)=>{
    const t = Date.parse(new Date(d)) - Date.parse(new Date());
    return t <= 0 ? true : false;
} 