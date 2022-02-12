import React from 'react';
import style from "./NewsLetter.module.scss";
import axios from "axios";
import { useSnackbar } from 'notistack';

const NewsLetter = (props) => {
    const {enqueueSnackbar}=useSnackbar();
    
    const [email,setEmail]=React.useState("");

    const handleChange=(e)=>{
        setEmail(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post(`https://tedxshirazuniversity.com/apin/mailer.php?mail=${email}`)
        .then(({data})=>{
            if(data===200){
                enqueueSnackbar('Thank you for subscribing to our newletter',{
                    variant:"success",
                    autoHideDuration: 5000
                });
            }
            else if(data===201){
                enqueueSnackbar("You already subscribed to our newsletter",{
                    variant:"info",
                    autoHideDuration:5000
                })
            }
            else{
                enqueueSnackbar("Request failed please try again",{
                    variant:"error",
                    autoHideDuration:5000
                })
            }
            setEmail("");
        })
    }
    
    return (
        <form onSubmit={handleSubmit} className={style.form}>
            <input className={style.input} placeholder="Email Address" type="email" value={email} onChange={handleChange} required/>
            <button type="submit" className={style.button}>
                Subscribe
            </button>
        </form>
    );
}
 
export default NewsLetter;