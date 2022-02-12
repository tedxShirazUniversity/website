import React from 'react';
import style from "./ContactUs.module.scss";
import Address from "../../components/Address/Address";
import Input from "../../components/UI/Input/Input";
import SendIcon from '@material-ui/icons/Send';
import {handleChange,rawFormToSendableObject,resetFormInputs,formTemplateToArray,useForm} from "../../scripts/inputController/inputController";
import {useSnackbar} from "notistack";
import axios from "axios";
import {Button} from "@material-ui/core";







const ContactUs = () => {
    const { enqueueSnackbar } = useSnackbar();

    const mapIframeSrc= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d866.9414915440577!2d52.526413393842134!3d29.639539833280512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fb21209367a920d%3A0xc97c76b367b903e7!2sQuantum%20Accelerator!5e0!3m2!1sen!2suk!4v1623783146293!5m2!1sen!2suk";
    const address=(
        <>
            <div>
                Quantum Startup Accelerator
                9th Floor
            </div>
            <div>
                Shiraz University Administration Central Bldg. Jomhoori Eslami Blvd. 
            </div>
            <div>
                Shiraz, Iran
            </div>
            <div>Postal Code: 7194684334</div>
            <div>Email: <a href="mailto:admin@tedxshirazuniversity.com">admin@tedxshirazuniversity.com</a></div>
        </>)
    
    const [formStatus,setFormStatus]=React.useState({
        isValid:false,
        isLoading:false
    })

    const FFFFormTemplate={
        name:{
            elementType:"input",
            className:style.input,
            value:"",
            elementConfig:{
                label:"Name",
                type:"text",
            },
            validation:{
                required:true,
            },
            valid:false,
            touched:false,
            // helperText:""
        },
        
        email:{
            elementType:"input",
            className:style.input,
            value:"",
            elementConfig:{
                label:"Email",
                type:"email",
            },
            validation:{
                required:true,
                email:true
            },
            valid:false,
            touched:false
        },
        
        phone:{
            elementType:"input",
            className:style.input,
            value:"",
            elementConfig:{
                label:"Phone Number",
                type:"tel",

            },
            validation:{
                required:true
            },
            valid:false,
            touched:false,
        },
        
        company:{
            elementType:"input",
            className:style.input,
            value:"",
            elementConfig:{
                label:"Company Name",
                type:"text",
            },
            validation:{
                // required:true,
            },
            valid:false,
            touched:false,
            // helperText:""
        },
        subject:{
            elementType:"input",
            className:[style.input,style.email].join(" "),
            value:"",
            elementConfig:{
                label:"Subject",
                type:"text",
            },
            validation:{
                required:true,
            },
            valid:false,
            touched:false,
            // helperText:""
        },
        message:{
            elementType:"input",
            className:style.input,
            value:"",
            elementConfig:{
                label:"Message",
                type:"text",
                multiline:true,
                rows:9,
            },
            validation:{
                required:true,
            },
            valid:false,
            touched:false,
            // helperText:""
        },
    }
    const [formTemplate,setFormTemplate] =useForm(FFFFormTemplate);
    let formInputsArray=formTemplateToArray(formTemplate);
    



    // TODO: modularize handleSubmit
    const handleSubmit=(event)=>{
        event.preventDefault();
        let formValueObj=rawFormToSendableObject(formTemplate);
        setFormStatus({
            isValid:true,
            isLoading:true
        })
        
        axios.post(`https://tedxshirazuniversity.com/api/insertcontact.php?pass=ab123&mail=${formValueObj.email}&text=${formValueObj.message}&phone=${formValueObj.phone}&name=${formValueObj.name}&sub=${formValueObj.subject}&cmp=${formValueObj.company}`)
        .then((response)=>{
            console.log(response);
            if(response.status===200){
                enqueueSnackbar("Message sent succesfully.",{
                    variant:"success",
                    autoHideDuration: 5000,
                })
                resetFormInputs(formTemplate,setFormTemplate);
                setFormStatus({
                    isValid:false,
                    isLoading:false
                })
            }
        })
        .catch((error)=>{
            enqueueSnackbar("Something went wrong. Please try again.",{
                variant:"error",
                autoHideDuration: 5000,
            })
            console.error(error);
            setFormStatus({
                isValid:true,
                isLoading:false
            })
        })       
    }
    
    return ( 
        <div className={style.container}>
            <Address mapIframeSrc={mapIframeSrc} address={address}/>
            <div className={style.contactContainer}>
                <div className={[style.formLoading,formStatus.isLoading ? style.show:null].join(" ") }>
                    <div>
                        <div className={style.dotsContainer}>
                            <div className={style.d1}></div>
                            <div className={style.d2}></div>
                            <div className={style.d3}></div>
                        </div>
                    </div>
                    <div className={style.text}>
                        Please wait...
                    </div>
                </div>
                <form 
                    onSubmit={handleSubmit}
                >
                    <div className={style.forminputs}>
                        <div className={style.r1}>
                            {formInputsArray.slice(0,4).map((elem)=>{
                                return (
                                    <Input 
                                        key={elem.id} 
                                        rtl={elem.config.rtl}
                                        changed={event=>handleChange(event,elem.id,formTemplate
                                            ,setFormTemplate
                                            ,formStatus,setFormStatus
                                        )} 
                                        valid={elem.config.valid} 
                                        touched={elem.config.touched} 
                                        helperText={elem.config.helperText} 
                                        shouldValidate={elem.config.validation ? true :false} 
                                        elementType={elem.config.elementType} 
                                        elementConfig={elem.config.elementConfig} 
                                        className={elem.config.className} 
                                        value={elem.config.value}  
                                        required={elem.config.validation ? elem.config.validation.required===true : false }
                                    />
                                )
                            })}
                        </div>
                        <div className={style.r2}>
                            {formInputsArray.slice(4,6).map((elem)=>{
                                return (
                                    <Input 
                                        key={elem.id} 
                                        rtl={elem.config.rtl}
                                        changed={event=>handleChange(event,elem.id,formTemplate,
                                            setFormTemplate,
                                            formStatus,setFormStatus
                                            )} 
                                        valid={elem.config.valid} 
                                        touched={elem.config.touched} 
                                        helperText={elem.config.helperText} 
                                        shouldValidate={elem.config.validation ? true :false} 
                                        elementType={elem.config.elementType} 
                                        elementConfig={elem.config.elementConfig} 
                                        className={elem.config.className} 
                                        value={elem.config.value}  
                                        required={elem.config.validation ? elem.config.validation.required===true : false }
                                    />
                                )
                            })}
                        </div>
                    </div>
                    <div className={style.btnContainer}>
                        <Button 
                            type="submit" 
                            // disabled={!formStatus.isValid} 
                            className={style.button} 
                            variant="contained" 
                            color="primary" 
                            size="large"
                            endIcon={<SendIcon />}
                            >
                                Submit Message
                        </Button>
                    </div>
                </form>
            </div>
    </div>
    );
}
 
export default ContactUs;