import React from 'react';

export const checkValidity=(value,rules)=>{
    let isValid=true;
    let helperText="";
    if(typeof value==="object"){
        return {isValid:true,helperText:""};
    }

    if(rules.minLength)
    {
        if(value.trim().length<rules.minLength)
        {
            isValid=false;
            helperText="Input should contain at least "+rules.minLength+" characters";
        }
    }
    if(rules.maxLength)
    {
        if(value.trim().length>rules.maxLength)
        {
            isValid=false;
            helperText="Maximum input length is "+rules.minLength+" characters";
            
        }
    }
    if(rules.required)
    {
        if(value.trim()===""){
            isValid=false;
            helperText="Please fill out this field.";
        }
    }
    // if(rules.email)
    // {
    //     if(! /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(value) )
    //     {
    //         isValid=false;
    //         helperText="Invalid form of Email"
    //     }
    // }
    
    return {isValid,helperText};
}

// export const handleChange=(e,inputName,formElementsArr,setFormElementsArr)=>{
//     const newInputValue = e.target.value;
//     const targettedElementCopy={...formElementsArr.find(elem=>{return elem.id===inputName})};
//     targettedElementCopy.config.value=newInputValue;

//     const temp= formElementsArr.map((elem)=>{
//         if(elem.id===inputName){
//             return targettedElementCopy
//         }
//         else return elem;
//     })
//     console.log(temp);
//     // setFormElementsArr(temp)
    
//     // setFormElementsArr((lastState)=>{
//     //     console.log(lastState);
//     //     const temp= lastState.map((elem)=>{
//     //         if(elem.id===inputName){
//     //             return targettedElementCopy
//     //         }
//     //         else return elem;
//     //     })
//     //     console.log(temp);
//     //     return temp
//     // })
    
    
    
    
    
//     // let formElementsCp=[...formElements]; //clone of all inputs ; when we clone this object , the child object of this object will still point to original one
//     // let targettedFormElementValueCp={...formElementsCp[inputIdentifier]} //deep clone of targetted input ; if we don't clone this , when we update the value ; it will modify the original state
//     /////////////////////////
//     // if(targettedFormElementValueCp.elementConfig.type==="file")
//     // {
//     //     targettedFormElementValueCp.value=e.target.files[0];
//     // }
//     // else{
//     //     targettedFormElementValueCp.value=e.target.value; // update the value of targetted input value
//     // }
//     /////////////////////////
    
    
//     // let {isValid,helperText}=checkValidity(targettedFormElementValueCp.value,targettedFormElementValueCp.validation);
//     // targettedFormElementValueCp.valid=isValid;
//     // targettedFormElementValueCp.touched=true;
//     // targettedFormElementValueCp.helperText=helperText;

//     // formElementsCp[inputIdentifier]=targettedFormElementValueCp;
    
    
    
    
    
    
//    // // formElementsCp[inputIdentifier].value=e.target.value // if we use this we modify the original state without setState and it's mistake
//    // // console.log("clone: "+ formElementsCp[inputIdentifier].value," original: "+formElements[inputIdentifier].value); //to show difference
    
    
//     // let formIsValid=isFormValid(formElementsCp);
//     // setFormElements({
//     //     ...formElementsCp
//     // });
    
//     //change form validity
//     // let formstatusCp={...formStatus}; 
//     // setFormStatus({
//     //     ...formstatusCp,
//     //     isValid:formIsValid
//     // })
//     //////////////////////

// }

export const handleChange=(e,inputIdentifier,formElements,setFormElements,formStatus,setFormStatus)=>{
    let formElementsCp={...formElements}; //clone of all inputs ; when we clone this object , the child object of this object will still point to original one
    let targettedFormElementValueCp={...formElementsCp[inputIdentifier]} //deep clone of targetted input ; if we don't clone this , when we update the value ; it will modify the original state
    /////////////////////////
    if(targettedFormElementValueCp.elementConfig.type==="file")
    {
        targettedFormElementValueCp.value=e.target.files[0];
    }
    else{
        targettedFormElementValueCp.value=e.target.value; // update the value of targetted input value
    }
    /////////////////////////
    
    
    let {isValid,helperText}=checkValidity(targettedFormElementValueCp.value,targettedFormElementValueCp.validation);
    targettedFormElementValueCp.valid=isValid;
    targettedFormElementValueCp.touched=true;
    targettedFormElementValueCp.helperText=helperText;

    formElementsCp[inputIdentifier]=targettedFormElementValueCp;
    
    // let formIsValid=true;
    // for(let elem in formElementsCp)
    // {
    //     if(!formElementsCp[elem].valid)
    //     {
    //         formIsValid=false;
    //         break;
    //     }
    // }
    
    
    
    
    
    // formElementsCp[inputIdentifier].value=e.target.value // if we use this we modify the original state without setState and it's mistake
    // console.log("clone: "+ formElementsCp[inputIdentifier].value," original: "+formElements[inputIdentifier].value); //to show difference
    
    // console.log(formElementsCp);
    
    let formIsValid=isFormValid(formElementsCp);
    setFormElements({
        ...formElementsCp
    });
    
    //change form validity
    let formstatusCp={...formStatus}; 
    setFormStatus({
        ...formstatusCp,
        isValid:formIsValid
    })
    //////////////////////

}

export const isFormValid=(formElementsCp)=>{
    let formIsValid=true;
    for(let elem in formElementsCp)
    {
        if(!formElementsCp[elem].valid)
        {
            formIsValid=false;
            break;
        }
    }
    return formIsValid;
}

export const resetFormInputs=(inputs,setFormElems)=>{
    let inputCp={...inputs};
    for(let formElem in inputCp)
    {
        inputCp[formElem].value="";  //add reset for select opstion input
    }
    setFormElems({
        ...inputCp
    })
}

export const rawFormToSendableObject=(formElements)=>{
    let formData={};
    for (let formElem in formElements)
    {
        formData[formElem]=formElements[formElem].value;
    }
    return formData;
}

export const useForm=(rawFormTemplate)=>{
    const [formTemplate,setFormTemplate]=React.useState(rawFormTemplate);

    return [formTemplate,setFormTemplate];
}
export const formTemplateToArray=(formTemplate)=>{
    let formInputsArray=[];
    for(let elem in formTemplate)
    {
        formInputsArray.push({
            id:elem,
            config:formTemplate[elem]
        })
    }
    return formInputsArray;
}