import React from 'react';
import {TextField} from "@material-ui/core";
import { createMuiTheme,StylesProvider, jssPreset,ThemeProvider } from "@material-ui/core/styles";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { create } from 'jss';
import rtl from 'jss-rtl';
// import style from "./Input.module.scss";

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });



const Input = (props,{colorPalette="#000000"}) => {
    const rtlTheme = createMuiTheme({
        direction: "rtl",
        palette: {
            primary:{
                main:colorPalette
            } 
        },
    });
    const theme = createMuiTheme({
        palette: {
            primary:{
                main:colorPalette
            } 
        },
        input: {
            color: 'white'
        }
    });
    let classNameList=[props.className];
    let inputElement;
    if(!props.elementConfig){
        throw Error("recieved input has not elementConfig property")
    }
    if(props.elementConfig.type==="file")
    {
        inputElement=
            (
            <>
                <label className={classNameList.join(" ")} >
                    <div style={{display:"flex"}}>
                        <CloudUploadIcon style={{padding:"3px 10px"}}/> <span style={{padding:"5px 0"}}>{props.elementConfig.label}</span>
                    </div>
                    <input 
                        type="file" 
                        onChange={props.changed} 
                        required={props.required}


                        ///file input doesn't need these below properties
                        // error={!props.valid && props.touched && props.shouldValidate} 
                        // helpertext={props.helperText} 
                        // value={props.value.name} // value in file input is file name not file object
                    />
                </label>
            </>
            )
    }
    else{
        inputElement=
            (<ThemeProvider theme={theme}>
                <TextField 
                label={props.elementConfig.label}
                type={props.elementConfig.type ?props.elementConfig.type:"text"}
                style={props.elementConfig.style?props.elementConfig.style:{}}
                multiline={props.elementConfig.multiline?props.elementConfig.multiline:false}
                rows={props.elementConfig.rows?props.elementConfig.rows:1}
                // min={props.elementConfig.min}
                // max={props.elementConfig.max}
                // {...props.elementConfig} 
                error={!props.valid && props.touched && props.shouldValidate} 
                helperText={props.helperText} 
                onChange={props.changed} 
                className={classNameList.join(" ")} 
                value={props.value}
                required={props.required}
            />
            </ThemeProvider>)
    }
    let output;

    if(props.rtl)
    {
        output=
            (<StylesProvider jss={jss}>
                <ThemeProvider theme={rtlTheme}>
                    {inputElement}
                </ThemeProvider>
            </StylesProvider>)
    }
    else{
        output=inputElement;
    }
    
    return ( 
    <>
        {output}
    </> );
}
 
export default Input;